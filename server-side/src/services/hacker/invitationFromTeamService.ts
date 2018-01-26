import { default as Idea, IdeaModel,InviteTeamModel } from '../../models/Idea';
import { parseErrors } from '../../utils/errorParser';

export const inviteFromTeam = (data: InviteTeamModel, callback: any) => {
    const inviteFromTeamObj = new Idea({ 
          teamName: data.teamName,
          title: data.title,
          description: 
          data.description, 
          approval:data.isApproved });
          Idea.find()  //here my inviteFrom Obj not working
        .then((idea: any) => callback(undefined, idea))
        .catch((idea: any) => callback(parseErrors(idea.errors), undefined));
};

export const inviteFromTeamPost = (data: InviteTeamModel, callback: any) => {
    const inviteFromTeam = new Idea({ 
          teamName: data.teamName,
          title: data.title,
          description: 
          data.description, 
          approval:data.isApproved });
          inviteFromTeam.save()
        .then((idea: any) => callback(undefined, idea))
        .catch((idea: any) => callback(parseErrors(idea.errors), undefined));
};