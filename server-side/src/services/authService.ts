import { default as User, UserModel } from '../models/User';
import { parseErrors } from '../utils/errorParser';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import Idea from '../models/Idea';

export const login = (credential: any, callback: any) => {
    User.findOne({username: credential.username}).then((user: any) => {
        if (!user || !user.isValidPassword(credential.password)) {
            return callback({errors: {global: 'no user found'}}, undefined);
        }
        Idea.count({createdBy: user, status: 'approved'})
            .then((count: number) => callback(undefined, user, !!count));
    });
};

export const signUp = (data: any, callback: any) => {
    const user = new User({username: data.username, email: data.email, 'profile.skillSet': data.skillSet});
    user.setPassword(data.password);
    user.save()
        .then((user: any) => callback(undefined, user))
        .catch((err: any) => callback(parseErrors(err.errors), undefined));
};

export const fetchUserByEmail = (email: string) => {
    return User.findOne({email: email}).then(user => user).catch(err => err);
};

export const fetchUserById = (id: any) => {
    return User.findById(id).then(user => user).catch(err => err);
};

export const fetchUserFromToken = (req: Request): any => {
    return isAuth(req).then((user: UserModel) => {
        fetchUserByEmail(user.email)
            .then(user => user)
            .catch(err => {
                return {code: 400, message: {errors: {global: 'Invalid user.'}}};
            });
    }).catch(err => {
        return {code: 401, message: {errors: {gloabl: 'TOKEN-EXPIRED'}}};
    });
};

export const isAuth = (req: Request) => {
    const token = <string>req.headers.authorization;
    return new Promise(function (resolve, reject) {
        jwt.verify(token, process.env.SECRET_KEY, function (err: any, user: UserModel) {
            if (err) {
                reject(err);
            }
            resolve(user);
        });
    });
};

export const fetchAllHackerUser = (params: { [key: string]: string | boolean | number } = {}) => {
    params.isAdmin = false;
    return User.find(params, {hashPassword: false, userRole: false, createdAt: false, updatedAt: false, __v: false})
        .then((users: UserModel[]) => users)
        .catch((error: any) => {
            return {statusCode: 400, mesage: parseErrors(parseErrors(error.errors))};
        });
};
