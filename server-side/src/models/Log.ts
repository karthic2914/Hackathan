import * as mongoose from 'mongoose';
import * as User from './User';
import * as Idea from './Idea';
import { IdeaModel } from './Idea';
import { UserModel } from './User';
import { STATUS } from '../utils/constant';

const logSchema = new mongoose.Schema({
    ideaId: {type: mongoose.Schema.Types.ObjectId, ref: Idea},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: User},
    inviteUser: {type: String, enum: STATUS, default: 'pending'},
    requestTeam: {type: Boolean, default: false}
}, {timestamps: true});

export interface LogModel extends mongoose.Document {
    ideaId: IdeaModel;
    userId: UserModel;
    inviteUser: string;
    requestTeam: boolean;
}

export default mongoose.model<LogModel>('Log', logSchema);