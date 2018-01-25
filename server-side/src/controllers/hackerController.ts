import { Request, Response } from 'express';
import { requestToHacker } from '../services/hackerService';
import { isAuth } from '../services/authService';
import { UserModel } from '../models/User';

export let inviteHacker = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        requestToHacker(req.body.data, function (err: any, user: any) {
            if (err) {
                return res.status(400).json(err);
            }
            res.json({user: user.toAuthJson()});
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};