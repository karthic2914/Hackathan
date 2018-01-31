import Log, { LogModel } from '../models/Log';
import { fetchUserByEmail, fetchUserById } from './authService';
import { fetchIdeaByCondition, fetchIdeaById } from './ideaService';
import { default as Idea, IdeaModel } from '../models/Idea';
import { default as User, UserModel } from '../models/User';
import { parseErrors } from '../utils/errorParser';
import * as logService from './logService';
import * as _ from 'lodash';

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
                        return ideas.map((idea: any) => {
                            return {idea: idea, isPending: _.find(logs, {ideaId: idea._id}).inviteUser};
                        });
                    });
                });
        }).catch(error => {
            return {statusCode: 400, mesage: parseErrors(parseErrors(error.errors))};
        });
};

export const requestToHacker = (data: any, email: string): any => {
    return fetchUserByEmail(email).then(function (currentUser) {
        return fetchIdeaByCondition({createdBy: currentUser, status: 'approved'}).then((idea: IdeaModel) => {
            if (!idea) return {statusCode: 400, message: {errors: {global: 'Idea not found'}}};
            return fetchUserById(data.userId)
                .then((userToRequest: UserModel) => {
                    if (!userToRequest) return {statusCode: 400, message: {errors: {global: 'User not found'}}};
                    return Log.findOne({
                        ideaId: idea,
                        userId: userToRequest,
                        inviteUser: {$in: ['pending', 'approved']}
                    })
                        .then((log: LogModel) => {
                            if (log) return {statusCode: 400, message: {errors: {global: 'Request already sent'}}};
                            return new Log({ideaId: idea, userId: userToRequest}).save()
                                .then((log: any) => log)
                                .catch((err: any) => ({statusCode: 400, mesage: parseErrors(parseErrors(err.errors))}));
                        });
                }).catch((err: any) => ({statusCode: 400, mesage: parseErrors(parseErrors(err.errors))}));
        });
    });
};

export const addOrRemoveHackerToTeam = (data: any, email: string) => {
    return fetchUserByEmail(email).then(function (currentUser) {
        return fetchIdeaByCondition({createdBy: currentUser, status: 'approved'}).then((idea: IdeaModel) => {
            if (!idea) return {statusCode: 400, message: {errors: {global: 'Idea not found'}}};
            return Log.findOne({ideaId: idea, userId: data.userId, requestTeam: true})
                .then((log: LogModel) => {
                    return fetchUserById(data.userId)
                        .then((user: UserModel) => {
                            let query = {};
                            if (data.addMember) {
                                query = {'$push': {'members': user._id}};
                            } else {
                                query = {'$pull': {'members': user._id}};
                            }
                            return Idea.findOneAndUpdate(
                                {'_id': idea._id},
                                query
                            ).then((idea: IdeaModel) => idea)
                                .catch((err: any) => ({
                                    statusCode: 400,
                                    message: {errors: {global: parseErrors(err.errors)}}
                                }));
                        }).catch(err => ({
                            statusCode: 400,
                            message: {errors: {global: 'No user found with requested id'}}
                        }));
                }).catch(err => ({
                    statusCode: 400,
                    message: {errors: {global: 'No request found for user. can not be added'}}
                }));
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
                    Log.findOneAndUpdate({ideaId: idea, userId: user}, {$set: {inviteUser: 'approved'}}, {new: true})
                        .then(log => console.log('log: ', log));
                    callback(undefined, {idea: idea, isPending: 'approved'});
                })
                .catch((err: any) => callback(parseErrors(err.errors), undefined));
        }
    });
};

export const listHackersRequest = (email: string) => {
    return fetchUserByEmail(email)
        .then((user: UserModel) => {
            return Idea.findOne({createdBy: user, status: 'approved'})
                .then((idea: IdeaModel) => {
                    return logService.fetchLogsByIdea(idea)
                        .then((logs: LogModel[]) => {
                            if (!logs.length) return [];
                            const userIds = logs.map((log => log.userId));
                            return User.find({
                                '_id': {$in: userIds}
                            }, {createdAt: false, updatedAt: false, __v: false, hashPassword: false})
                                .then((users: UserModel[]) => {
                                    if (users) {
                                        return users.map((user: UserModel) => {
                                            return {
                                                user: user, isMember: !!(_.find(idea.members, function (userId) {
                                                    return userId.toString() == user._id.toString();
                                                }))
                                            };
                                        });
                                    } else {
                                        return [];
                                    }
                                });
                        });
                });
        }).catch(error => {
            return {statusCode: 400, mesage: parseErrors(parseErrors(error.errors))};
        });
};

export const requestTeam = (data: any, email: string): any => {
    return fetchUserByEmail(email).then(function (currentUser) {
        return fetchIdeaById(data.ideaId).then((idea: IdeaModel) => {
            if (!idea) return {statusCode: 400, message: {global: 'Idea not found'}};
            return Log.findOne({ideaId: idea, userId: currentUser, requestTeam: true})
                .then((log: LogModel) => {
                    if (log) return {statusCode: 400, message: {global: 'Request already sent'}};
                    return new Log({ideaId: idea, userId: currentUser, requestTeam: true}).save()
                        .then((log: any) => log)
                        .catch((err: any) => ({statusCode: 400, mesage: parseErrors(parseErrors(err.errors))}));
                });
        });
    });
};