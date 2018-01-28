import { fetchUserByEmail } from '../authService';
import { UserModel } from '../../models/User';
import Log, { LogModel } from '../../models/Log';
import * as logService from './../logService';
import { default as Idea, IdeaModel } from '../../models/Idea';
import { parseErrors } from '../../utils/errorParser';
import { fetchIdeaById } from '../ideaService';

export const getTeamInvites = (email: string) => {
    return fetchUserByEmail(email)
        .then((user: UserModel) => {
            return logService.fetchLogsByUser(user)
                .then((logs: LogModel[]) => {
                    if (!logs.length) {
                        return [];
                    }
                    const ideaIds = logs.map((log => log.ideaId));
                    return Idea.find({
                        '_id': {$in: ideaIds}
                    }, {createdAt: false, updatedAt: false, __v: false}).then((ideas: IdeaModel[]) => {
                        return ideas;
                    });
                });
        }).catch(error => {
            return {statusCode: 400, mesage: parseErrors(parseErrors(error.errors))};
        });
};

export const approveTeam = (data: any, user: UserModel, callback: any) => {
    fetchIdeaById(data.ideaId).then((idea: IdeaModel) => {
        if (!idea) {
            return callback({errors: {global: 'Idea not found'}}, undefined);
        } else {
            idea.members.push(user);
            idea.save()
                .then((idea: IdeaModel) => {
                    Log.findOneAndRemove({ideaId: idea, userId: user});
                    callback(undefined, idea);
                })
                .catch((err: any) => callback(parseErrors(err.errors), undefined));
        }
    });
};