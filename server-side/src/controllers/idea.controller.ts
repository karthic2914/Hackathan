import { Request, Response } from 'express';
import { fetchUserByEmail, isAuth } from '../services/authService';
import { UserModel } from '../models/User';
import { IdeaModel } from '../models/Idea';
import { listIdea, postIdea } from '../services/ideaService';

export let getApprovedIdeas = (req: Request, res: Response) => {
    listIdea(req.params || {}, function (err: any, ideaList: IdeaModel[]) {
        if (err) {
            return res.status(400).json(err);
        }
        res.json({ideas: ideaList});
    });
};

export let list = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        listIdea(req.params || {}, function (err: any, ideaList: IdeaModel[]) {
            if (err) {
                return res.status(400).json(err);
            }
            res.json({ideas: ideaList});
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let listMyIdea = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        fetchUserByEmail(user.email).then((user: UserModel) => {
            if (!user) {
                return res.status(400).json({errors: {global: 'Invalid user.'}});
            }
            listIdea({createdBy: user}, function (err: any, ideaList: IdeaModel[]) {
                if (err) {
                    return res.status(400).json(err);
                }
                res.json({ideas: ideaList});
            });
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

export let saveIdea = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        fetchUserByEmail(user.email).then((user: UserModel) => {
            if (!user) {
                return res.status(400).json({errors: {global: 'Invalid user.'}});
            }
            postIdea(req.body, user, function (err: any, idea: IdeaModel) {
                if (err) {
                    return res.status(400).json(err);
                }
                res.json({status: 'success', idea: idea});
            });
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

