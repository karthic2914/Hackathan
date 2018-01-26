import { Request, Response } from 'express';
import { joinTeam, requestToHacker } from '../services/hackerService';
import { fetchUserByEmail, isAuth } from '../services/authService';
import { UserModel } from '../models/User';
import { LogModel } from "../models/Log";

export let inviteHacker = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({status: "error"});
        requestToHacker(req.body.data, function (err: any, data: LogModel) {
            if (err) {
                return res.status(400).json(err);
            }
            res.json({status: 'success'});
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let acceptTeamInvitation = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({status: "error"});
        fetchUserByEmail(user.email).then((user: UserModel) => {
            if (!user) {
                return res.status(400).json({errors: {global: 'Invalid user.'}});
            }
            joinTeam(req.body.data, user, function (err: any, data: LogModel) {
                if (err) {
                    return res.status(400).json(err);
                }
                res.json({status: 'success'});
            });
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};
