import { Request, Response } from 'express';
import { postIdea } from '../../services/hacker/postAnIdeaService';

export let postAnIdea = (req: Request, res: Response) => {
    postIdea(req.body, function (err: any, comment: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(comment);
    });
};
