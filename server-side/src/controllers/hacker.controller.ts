import { Request, Response } from 'express';
import {
    addOrRemoveHackerToTeam, joinTeam, listHackersRequest, listTeamInvites, requestTeam,
    requestToHacker
} from '../services/hackerService';
import { fetchUserByEmail, isAuth } from '../services/authService';
import { UserModel } from '../models/User';
import { LogModel } from '../models/Log';

export let listTeamInvitations = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        listTeamInvites(user.email)
            .then((response: any) => {
                if (response && response.statusCode === 400) {
                    return res.status(400).json({errors: {global: response.message}});
                }
                res.json({message: `Found ${response.length} invites from other teams`, data: {ideas: response}});
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let inviteHacker = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({errors: {global: 'Invalid JSON format'}});
        requestToHacker(req.body.data, user.email)
            .then((response: any) => {
                if (response && response.statusCode === 400) {
                    return res.status(400).json(response.message);
                }
                res.json({message: 'Invtation sent successfully to join the team.', status: 'success'});
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let acceptTeamInvitation = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({errors: {global: 'Invalid JSON format'}});
        fetchUserByEmail(user.email).then((user: UserModel) => {
            if (!user) {
                return res.status(400).json({errors: {global: `No user found with email: ${user.email}`}});
            }
            joinTeam(req.body.data, user, function (err: any, data: any) {
                if (err) {
                    return res.status(400).json(err);
                }
                res.json({message: `Thanks ${user.username} for joining the team.`, data: data});
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
                    return res.status(400).json({errors: {gloabl: response.message}});
                }
                res.json({message: `Found ${response.length} request from other hackers`, data: {users: response}});
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let requestToJoinTeam = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({errors: {global: 'Invalid JSON format'}});
        requestTeam(req.body.data, user.email)
            .then((response: any) => {
                if (response && response.statusCode === 400) {
                    return res.status(400).json({errors: response.message});
                }
                res.json({
                    message: `Congrats ${user.username} your request has been successfully sent.`,
                    status: 'success'
                });
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let addToTeam = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({errors: {global: 'Invalid JSON format'}});
        addOrRemoveHackerToTeam(req.body.data, user.email)
            .then((response: any) => {
                if (response && response.statusCode === 400) {
                    return res.status(400).json(response.message);
                }
                res.json({
                    message: `User ${req.body.data.addMember ? 'added to' : 'removed from'} the team`,
                    status: 'success'
                });
            });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};