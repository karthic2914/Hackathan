import * as mongoose from 'mongoose';
import * as User from './User';
import * as Idea from './Idea';

const CommentSchema = new mongoose.Schema({
  idea: {type: mongoose.Schema.Types.ObjectId, ref: Idea, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: User},
  description: {type: String, required: true},
}, {timestamps : true});

export default mongoose.model('Comment', CommentSchema);
