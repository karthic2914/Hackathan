// GET – to get all invitations – {idea:’’, description:’’, owner:’’}
// POST – if any action performed – true /false

import { Request, Response } from 'express';
import { inviteFromTeam, inviteFromTeamPost } from '../../services/hacker/invitationFromTeamService';

export let inviteTeam = (req: Request, res: Response) => {
    inviteFromTeam(req.body, function (err: any, msg: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(msg);
    });
};

export let inviteTeamPost = (req: Request, res: Response) => {
    inviteFromTeamPost(req.body, function (err: any, msg: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(msg);
    });
};