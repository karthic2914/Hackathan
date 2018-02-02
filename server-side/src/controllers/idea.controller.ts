import { Request, Response } from 'express';
import { fetchUserByEmail, isAuth } from '../services/authService';
import { UserModel } from '../models/User';
import { IdeaModel } from '../models/Idea';
import { listIdea, postIdea, updateIdea, deleteIdeaService } from '../services/ideaService';

export let getApprovedIdeas = (req: Request, res: Response) => {
    const params = req.params || {};
    params.status = 'approved';
    listIdea(params, function (err: any, ideaList: IdeaModel[]) {
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
            res.json({message: `So far ${ideaList.length} ideas has been posted by hackers.`, ideas: ideaList});
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
                    return res.status(400).json({errors: {global: err}});
                }
                res.json({
                    message: `Congratulations ${user.email}!! Your idea has been posted successfully. Now wait for admin approval.`,
                    idea: idea
                });
            });
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};
export let ideaUpdate = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        fetchUserByEmail(user.email).then((user: UserModel) => {
            if (!user) {
                return res.status(400).json({errors: {global: 'Invalid user.'}});
            }
            updateIdea(req.body, user, function (err: any, idea: IdeaModel) {
                if (err) {
                    return res.status(400).json({errors: {global: err}});
                }
                res.json({message: `Idea ${idea.title} has approved now.`, status: 'success', idea: idea});
            });
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};

// delete Idea
export let deleteIdea = (req: Request, res: Response) => {
    deleteIdeaService(req.body, function (err: any, comment: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.send('Idea Deleted Successfully');
    });
};


