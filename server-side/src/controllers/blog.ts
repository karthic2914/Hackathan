import { Request, Response } from 'express';
import { saveBlog, getAllBlogs, updateBlog, getActiveBlogs } from '../services/blogService';
import { default as Blog, BlogModel } from '../models/Blog';
import { UserModel } from '../models/User';
import { fetchUserByEmail, isAuth } from '../services/authService';

export let postBlog = (req: Request, res: Response) => {
    saveBlog(req.body, function (err: any, blog: BlogModel) {
        if (err) {
            return res.status(400).json(err);
        } else {
            getAllBlogs({}, function (err: any, blogs: any) {
                if (err) {
                    res.status(400).json(err);
                    return;
                }
                res.json({blogs});
            });
        }
    });
};

export let getApprovedBlogs = (req: Request, res: Response) => {
    getActiveBlogs({}, function (err: any, blogs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({blogs});
    });
};

export let getBlogs = (req: Request, res: Response) => {
    getAllBlogs({}, function (err: any, blogs: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json({blogs});
    });
};

export let updateblog = (req: Request, res: Response) => {
    isAuth(req).then((user: UserModel) => {
        fetchUserByEmail(user.email).then((user: UserModel) => {
            if (!user) {
                return res.status(400).json({errors: {global: 'Invalid user.'}});
            }
            updateBlog(req.body, user, function (err: any, blog: any) {
                if (err) {
                    res.status(400).json(err);
                    return;
                } else {
                    getAllBlogs({}, function (err: any, blogs: any) {
                        if (err) {
                            res.status(400).json(err);
                            return;
                        }
                        res.json({blogs});
                    });
                }
            });
        });
    }).catch(err => {
        res.status(401).json({errors: {global: 'TOKEN-EXPIRED'}});
    });
};
