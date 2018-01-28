import Idea, { IdeaModel } from '../models/Idea';
import { parseErrors } from '../utils/errorParser';
import { default as User, UserModel } from '../models/User';

export const listIdea = (params: { [key: string]: string | number | Object }, callback: any) => {
    Idea.find(params)
        .then((ideas: IdeaModel[]) => callback(undefined, ideas))
        .catch((error: any) => callback(parseErrors(error.errors), undefined));
};

export const postIdea = (data: IdeaModel, owner: UserModel, callback: any) => {
    const ideaInstance = new Idea(data);
    ideaInstance.createdBy = owner;
    ideaInstance.save()
        .then((idea: IdeaModel) => callback(undefined, idea))
        .catch((idea: any) => callback(parseErrors(idea.errors), undefined));
};

export const fetchIdeaById = (id: any) => {
    return Idea.findById(id).then(idea => idea).catch(err => err);
};

export const fetchIdeaByCondition = (condition: { [key: string]: string | number | boolean | Object }) => {
    return Idea.findOne(condition).then((idea: IdeaModel) => idea).catch(err => err);
};