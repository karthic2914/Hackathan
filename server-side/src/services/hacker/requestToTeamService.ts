
import { default as Idea, IdeaModel } from '../../models/Idea';
import { parseErrors } from '../../utils/errorParser';

export const getAllIdea = ({ }, callback: any) => {
    Idea.find()
        .then((idea: IdeaModel[]) => callback(undefined, idea))
        .catch((blogs: any) => callback(parseErrors(blogs.errors), undefined));
};

export const searchIdea = (data: IdeaModel, callback: any) => {
    const IdeaObj = new Idea({ title: data.title });
    IdeaObj.save()
        .then((idea: any) => callback(undefined, idea))
        .catch((idea: any) => callback(parseErrors(idea.errors), undefined));
};

export const postTeamReq = (data: IdeaModel, callback: any) => {
    const teamReq = new Idea({ title: data.title, description: data.description });
    teamReq.save()
        .then((idea: any) => callback(undefined, idea))
        .catch((idea: any) => callback(parseErrors(idea.errors), undefined));
};