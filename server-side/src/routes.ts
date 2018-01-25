import { auth, signup } from './controllers/auth';
import { postBlog, getBlogs, updateblog } from './controllers/blog';
import * as express from 'express';
import { postcomment, deletecomment } from './controllers/comment';
import { postAnIdea } from './controllers/hacker/postAnIdea';
import { inviteHacker } from './controllers/hackerController';

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
        app.post('/hacker/postAnIdea', postAnIdea);
        app.post('/hacker/invitehacker', inviteHacker);
        // app.get('/hacker/requestToTeam', functionNameComeHere);
        // app.post('/hacker/requestToTeam/search', functionNameComeHere);
        // app.post('/hacker/requestToTeam/request', functionNameComeHere);
        // app.get('/hacker/requestToHacker', functionNameComeHere);
        // app.post('/hacker/requestToHacker/search', functionNameComeHere);
        // app.post('/hacker/requestToHacker/request', functionNameComeHere);
        // app.get('/hacker/invitationFromTeam', functionNameComeHere);
        // app.post('/hacker/invitationFromTeam/approval', functionNameComeHere);
        // app.get('/hacker/invitationFromHacker', functionNameComeHere);
        // app.post('/hacker/invitationFromHacker/approval', functionNameComeHere);
    }
}