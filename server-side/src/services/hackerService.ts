import Idea, { IdeaModel } from '../models/Idea';
import Log from '../models/Log';
import { fetchUserByEmail, fetchUserById } from './authService';

const fetchIdea = (id: any) => {
    return Idea.findById(id).then(idea => idea).catch(err => err);
};

export const requestToHacker = (data: any, callback: any) => {
    fetchUserById(data.userId).then(function (user) {
        if (!user) {
            return callback({errors: {global: 'User not found'}}, 400, undefined);
        }
        fetchIdea(data.ideaId).then(idea => {
            if (!idea) {
                return callback({errors: {global: 'Idea not found'}}, 400, undefined);
            } else {
                new Log({ideaId: idea, userId: user}).save()
                    .then(callback)
                    .catch(callback);
            }
        });
    });
};