import * as mongoose from 'mongoose';
import * as User from './User';
import * as Idea from './Idea';

const logSchema = new mongoose.Schema({
    ideaId: { type: mongoose.Schema.Types.ObjectId, ref: Idea },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: User },
}, { timestamps: true });

export interface LogModel extends mongoose.Document {
    ideaId: typeof mongoose.Schema.Types.ObjectId;
    userId: typeof mongoose.Schema.Types.ObjectId;
}

export default mongoose.model('Log', logSchema);