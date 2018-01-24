import { Request, Response } from 'express';
import { postComment, deleteComment } from '../services/commentService';

export let postcomment = (req: Request, res: Response) => {
    postComment(req.body, function (err: any, comment: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(comment);
    });
};

export let deletecomment = (req: Request, res: Response) => {
    deleteComment(req.body, function (err: any, comment: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.send('Comment Deleted Successfully');
    });
};