import Log, { LogModel } from '../models/Log';
import { fetchUserByEmail, fetchUserById } from './authService';
import { fetchIdeaByCondition, fetchIdeaById } from './ideaService';
import { default as Idea, IdeaModel } from '../models/Idea';
import { default as User, UserModel } from '../models/User';
import { parseErrors } from '../utils/errorParser';
import * as logService from './logService';

export const listTeamInvites = (email: string) => {
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

export const requestToHacker = (data: any, email: string): any => {
    return fetchUserByEmail(email).then(function (currentUser) {
        return fetchIdeaByCondition({createdBy: currentUser, isApproved: true}).then((idea: IdeaModel) => {
            if (!idea) return {statusCode: 400, message: {errors: {global: 'Idea not found'}}};
            return fetchUserById(data.userId)
                .then((userToRequest: UserModel) => {
                    if (!userToRequest) return {statusCode: 400, message: {errors: {global: 'User not found'}}};
                    return Log.findOne({ideaId: idea, userId: userToRequest})
                        .then((log: LogModel) => {
                            if (log) return {statusCode: 400, message: {errors: {global: 'Request already sent'}}};
                            return new Log({ideaId: idea, userId: userToRequest, inviteUser: true}).save()
                                .then((log: any) => log)
                                .catch((err: any) => ({statusCode: 400, mesage: parseErrors(parseErrors(err.errors))}));
                        });
                }).catch((err: any) => ({statusCode: 400, mesage: parseErrors(parseErrors(err.errors))}));
        });
    });
};

export const joinTeam = (data: any, user: UserModel, callback: any) => {
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

export const listHackersRequest = (email: string) => {
    return fetchUserByEmail(email)
        .then((user: UserModel) => {
            return Idea.findOne({createdBy: user, isApproved: true})
                .then((idea: IdeaModel) => {
                    return logService.fetchLogsByIdea(idea)
                        .then((logs: LogModel[]) => {
                            if (!logs.length) return [];
                            const userIds = logs.map((log => log.userId));
                            return User.find({
                                '_id': {$in: userIds}
                            }, {createdAt: false, updatedAt: false, __v: false, hashPassword: false})
                                .then((users: UserModel[]) => {
                                    return users;
                                });
                        });
                });
        }).catch(error => {
            return {statusCode: 400, mesage: parseErrors(parseErrors(error.errors))};
        });
};