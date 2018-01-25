import { default as Idea, IdeaModel } from '../../models/Idea';
import { parseErrors } from '../../utils/errorParser';

export const postIdea = (data: IdeaModel, callback: any) => {
    const IdeaObj = new Idea({ teamName: data.teamName, title: data.title, description: data.description, technologyTags: data.technologyTags });
    IdeaObj.save()
        .then((idea: any) => callback(undefined, idea))
        .catch((idea: any) => callback(parseErrors(idea.errors), undefined));
};