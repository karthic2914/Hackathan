import * as mongoose from 'mongoose';
import * as User from './User';
import * as Idea from './Idea';
import { IdeaModel } from './Idea';
import { UserModel } from './User';

const logSchema = new mongoose.Schema({
    ideaId: {type: mongoose.Schema.Types.ObjectId, ref: Idea},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: User},
    inviteUser: {type: Boolean, default: false},
    requestTeam: {type: Boolean, default: false}
}, {timestamps: true});

export interface LogModel extends mongoose.Document {
    ideaId: IdeaModel;
    userId: UserModel;
    inviteUser: boolean;
    requestTeam: boolean;
}

export default mongoose.model<LogModel>('Log', logSchema);