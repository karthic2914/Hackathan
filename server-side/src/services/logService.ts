import Log, { LogModel } from '../models/Log';
import { UserModel } from '../models/User';
import { IdeaModel } from '../models/Idea';

export const fetchLogsByUser = (user: UserModel) => {
    return Log.find({userId: user, inviteUser: {$in: ['pending', 'approved']}})
        .then((logs: LogModel[]) => logs)
        .catch(err => err);
};

export const fetchLogsByIdea = (idea: IdeaModel) => {
    return Log.find({ideaId: idea, requestTeam: true})
        .then((logs: LogModel[]) => logs)
        .catch(err => err);
};