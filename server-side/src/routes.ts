import * as route from './controllers';
import { postBlog, getBlogs, updateblog } from './controllers/blog';
import * as express from 'express';
import { postcomment, deletecomment } from './controllers/comment';
import { getIdeaDetails, searchIdeaDetails } from './controllers/hacker/requestToTeam';
import { getInvitationFromTeam, approveTeamInvitation } from './controllers/hacker/invitationFromTeam';

export class Routes {

    protected basePath: string;

    constructor(NODE_ENV: string) {
    }

    paths(app: express.Application) {
        app.post('/user/auth', route.auth);
        app.post('/user/signup', route.signup);
        app.get('/user', route.listUser);
        app.post('/blog', postBlog);
        app.get('/blogs', getBlogs);
        app.put('/blog', updateblog);
        app.delete('/comment', deletecomment);
        app.post('/comment', postcomment);
        app.get('/hacker/requestToTeam', getIdeaDetails);
        app.post('/hacker/requestToTeam/search', searchIdeaDetails);
        app.post('/hacker/invitehacker', route.inviteHacker);
        app.post('/hacker/jointeam', route.acceptTeamInvitation);
        app.get('/hacker/listinvitation', route.listTeamInvitations);
        app.get('/hacker/listhackerrequest', route.listHackerRequest);
        app.get('/idea/approved', route.getApprovedIdeas);
        app.get('/idea', route.list);
        app.get('/idea/myideas', route.listMyIdea);
        app.post('/idea/save', route.saveIdea);
        // app.post('/hacker/requestToTeam/request', functionNameComeHere);
        // app.get('/hacker/requestToHacker', functionNameComeHere);
        // app.post('/hacker/requestToHacker/search', functionNameComeHere);
        // app.post('/hacker/requestToHacker/request', functionNameComeHere);
         app.post('/hacker/invitationFromTeam', getInvitationFromTeam);
         app.post('/hacker/invitationFromTeam/approval', approveTeamInvitation);
        // app.get('/hacker/invitationFromHacker', functionNameComeHere);
        // app.post('/hacker/invitationFromHacker/approval', functionNameComeHere);
    }
}