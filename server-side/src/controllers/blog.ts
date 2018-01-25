import { Request, Response } from 'express';
import { saveBlog, getAllBlogs, updateBlog } from '../services/blogService';

export let postBlog = (req: Request, res: Response) => {
    saveBlog(req.body, function (err: any, blog: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(blog);
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
    updateBlog(req.body, function (err: any, blog: any) {
        if (err) {
            res.status(400).json(err);
            return;
        }
        res.json(blog);
    });
};

