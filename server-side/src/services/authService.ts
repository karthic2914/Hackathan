import { default as User, UserModel } from '../models/User';
import { parseErrors } from '../utils/errorParser';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

export const login = (credential: any, callback: any) => {
    User.findOne({username: credential.username}).then((user: any) => {
        if (!user || !user.isValidPassword(credential.password)) {
            return callback({errors: {global: 'no user found'}}, undefined);
        }
        return callback(undefined, user);
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
