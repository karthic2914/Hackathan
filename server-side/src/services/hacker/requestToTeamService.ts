import { default as Idea, IdeaModel } from '../../models/Idea';
import { parseErrors } from '../../utils/errorParser';
import { userInfo } from 'os';

export const fetchIdeaDeatils = ({ }, callback: any) => {
    Idea.find()
        .then((data: IdeaModel[]) => callback(undefined, data))
        .catch((data: any) => callback(parseErrors(data.errors), undefined));
};

/* export const searchIdeaDetails = ( data: IdeaModel, callback: any) => { // Not working as expected. Recheck again
    Idea.find ({title: data.title})
        .then((blogs: IdeaModel[]) => callback(undefined, blogs))
        .catch((blogs: any) => callback(parseErrors(blogs.errors), undefined));
}; */

export const searchIdeaDetails = ( data: IdeaModel, callback: any) => { // Not working as expected. Recheck again
    Idea.findOne({title: data.title}), function(err: any, res: any) {
        console.log('into mongoose findone');
        return res;
   };
};