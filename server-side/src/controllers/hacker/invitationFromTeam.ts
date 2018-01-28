import { Request, Response } from 'express';
import { getTeamInvites, approveTeam } from '../../services/hacker/invitationFromTeamService';
import { isAuth, fetchUserByEmail } from '../../services/authService';
import { UserModel } from '../../models/User';
import { LogModel } from '../../models/Log';



export let getInvitationFromTeam = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        getTeamInvites(user.email)
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

export let approveTeamInvitation = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        if (!req.body.data) return res.status(400).json({status: 'Invalid JSON format'});
        fetchUserByEmail(user.email).then((user: UserModel) => {
            if (!user) {
                return res.status(400).json({errors: {global: 'Invalid user.'}});
            }
            approveTeam(req.body.data, user, function (err: any, data: LogModel) {
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