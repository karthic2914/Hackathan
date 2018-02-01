import { Request, Response } from 'express';
import { fetchAllHackerUser, isAuth, login, signUp } from '../services/authService';
import { UserModel } from '../models/User';

export let auth = (req: Request, res: Response) => {
    login(req.body.data, function (err: any, user: any, isIdeaExist: boolean) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({message: `welcome ${user.username}`, user: user.toAuthJson(isIdeaExist)});
    });
};

export let signup = (req: Request, res: Response) => {
    signUp(req.body.data, function (err: any, user: any) {
        if (err) {
            return res.status(400).json({errors: err});
        }
        res.json({message: `welcome ${user.username}`, user: user.toAuthJson()});
    });
};

export let listUser = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        fetchAllHackerUser(req.params || {}).then((response: any) => {
            if (response.statusCode === 400) {
                return res.status(400).json({errors: response.message});
            }
            res.json({data: {users: response}});
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};