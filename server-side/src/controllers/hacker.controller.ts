import { Request, Response } from 'express';
import { joinTeam, listHackersRequest, listTeamInvites, requestToHacker } from '../services/hackerService';
import { fetchUserByEmail, isAuth } from '../services/authService';
import { UserModel } from '../models/User';
import { LogModel } from '../models/Log';

export let listTeamInvitations = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        listTeamInvites(user.email)
            .then((response: any) => {
                if (response && response.statusCode === 400) {
                    return res.status(400).json({errors: response.message});
                }
                res.json({data: {ideas: response}});
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let inviteHacker = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({status: 'Invalid JSON format'});
        requestToHacker(req.body.data, user.email)
            .then((response: any) => {
                if (response && response.statusCode === 400) {
                    return res.status(400).json({errors: response.message});
                }
                res.json({status: 'success'});
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let acceptTeamInvitation = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({status: 'Invalid JSON format'});
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

export let listHackerRequest = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        listHackersRequest(user.email)
            .then((response: any) => {
                if (response && response.statusCode === 400) {
                    return res.status(400).json({errors: response.message});
                }
                res.json({data: {users: response}});
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};
