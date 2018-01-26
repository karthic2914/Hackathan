// GET – to get all the ideas
// POST – to post the selected ‘Idea’ and get the teams detail(team image as well if any)
// POST – Requesting  - {idea:’’, team:’’,description:”};


import { Request, Response } from 'express';
import { fetchIdeaDeatils } from '../../services/hacker/requestToTeamService';

export let getIdeaDetails = (req: Request, res: Response) => {
    fetchIdeaDeatils({}, function (err: any, ideas: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({ideas});
    });
};

export let searchIdeaDetails = (req: Request, res: Response) => {
    fetchIdeaDeatils(req.body, function (err: any, blogs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({blogs});
    });
};