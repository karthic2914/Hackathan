import Log, { LogModel } from '../models/Log';
import { fetchUserById } from './authService';
import { fetchIdeaById } from "./ideaService";
import { IdeaModel } from "../models/Idea";
import { UserModel } from "../models/User";
import { parseErrors } from "../utils/errorParser";

export const requestToHacker = (data: any, callback: any) => {
    fetchUserById(data.userId).then(function (user) {
        if (!user) {
            return callback({errors: {global: 'User not found'}}, undefined);
        }
        fetchIdeaById(data.ideaId).then(idea => {
            if (!idea) {
                return callback({errors: {global: 'Idea not found'}}, undefined);
            } else {
                Log.findOne({ideaId: idea, userId: user})
                    .then((log: LogModel) => {
                        if (log) {
                            return callback({errors: {global: 'Request already sent'}}, undefined);
                        }
                        new Log({ideaId: idea, userId: user}).save()
                            .then((log: LogModel) => callback(undefined, log))
                            .catch((err: any) => callback(parseErrors(err.errors), undefined));
                    });
            }
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
                    callback(undefined, idea)
                })
                .catch((err: any) => callback(parseErrors(err.errors), undefined));
        }
    });
};