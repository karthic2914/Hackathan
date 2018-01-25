
import { Request, Response } from 'express';
import { getAllIdea, searchIdea,  postTeamReq } from '../../services/hacker/requestToTeamService';

// GET – to get all the ideas

export let getIdea = (req: Request, res: Response) => {
    getAllIdea({}, function (err: any, blogs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({blogs});
    });
};
// POST – to post the selected ‘Idea’ and get the teams detail(team image as well if any)
export let ideaSearch = (req: Request, res: Response) => {
    searchIdea(req.body, function (err: any, blogs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({blogs});
    });
};
// POST – Requesting  - {idea:’’, team:’’,description:”};
export let teamReq = (req: Request, res: Response) => {
    postTeamReq(req.body, function (err: any, blogs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({blogs});
    });
};