import * as mongoose from 'mongoose';
import * as User from './User';
import * as Idea from './Idea';

const CommentSchema = new mongoose.Schema({
  ideaId: {type: mongoose.Schema.Types.ObjectId, ref: Idea, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: User},
  description: {type: String, required: true},
}, {timestamps : true});

export interface CommentModel extends mongoose.Document {
  ideaId: typeof mongoose.Schema.Types.ObjectId;
  userId: typeof mongoose.Schema.Types.ObjectId;
  description: string;
}

export default mongoose.model('Comment', CommentSchema);
