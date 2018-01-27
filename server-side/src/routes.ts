import { auth, signup, list, inviteHacker, listMyIdea, saveIdea, acceptTeamInvitation, listUser } from './controllers';
import { postBlog, getBlogs, updateblog } from './controllers/blog';
import * as express from 'express';
import { postcomment, deletecomment } from './controllers/comment';
import { getIdeaDetails, searchIdeaDetails } from './controllers/hacker/requestToTeam';

export class Routes {

    protected basePath: string;

    constructor(NODE_ENV: string) {
    }

    paths(app: express.Application) {
        app.post('/user/auth', auth);
        app.post('/user/signup', signup);
        app.get('/user', listUser);
        app.post('/blog', postBlog);
        app.get('/blogs', getBlogs);
        app.put('/blog', updateblog);
        app.delete('/comment', deletecomment);
        app.post('/comment', postcomment);
        app.get('/hacker/requestToTeam', getIdeaDetails);
        app.post('/hacker/requestToTeam/search', searchIdeaDetails);
        app.post('/hacker/invitehacker', inviteHacker);
        app.post('/hacker/jointeam', acceptTeamInvitation);
        app.get('/idea', list);
        app.get('/idea/myideas', listMyIdea);
        app.post('/idea/save', saveIdea);
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