import { auth, signup } from './routes/auth';
import * as express from 'express';

export class Routes {

    protected basePath: string;

    constructor(NODE_ENV: string) {
    }

    paths(app: express.Application) {
        app.post('/user/auth', auth);
        app.post('/user/signup', signup);
    }

}