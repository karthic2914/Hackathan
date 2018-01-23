import { Request, Response } from 'express';
import { login, signUp } from '../controllers/authController';

export let auth = (req: Request, res: Response) => {
    login(req.body.data, function (err: any, user: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({user: user.toAuthJson()});
    });
};

export let signup = (req: Request, res: Response) => {
    signUp(req.body.data, function (err: any, user: any) {
        if (err) {
            return res.status(400).json({errors: err});
        }
        res.json({user: user.toAuthJson()});
    });
};