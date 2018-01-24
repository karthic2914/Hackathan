import { auth, signup } from './controllers/auth';
import { postBlog, getBlogs, updateblog } from './controllers/blog';
import * as express from 'express';
import { postcomment, deletecomment } from './controllers/comment';

export class Routes {

    protected basePath: string;

    constructor(NODE_ENV: string) {
    }

    paths(app: express.Application) {
        app.post('/user/auth', auth);
        app.post('/user/signup', signup);
        app.post('/blog', postBlog);
        app.get('/blogs', getBlogs);
        app.put('/blog', updateblog);
        app.delete('/comment', deletecomment);
        app.post('/comment', postcomment);
    }

}