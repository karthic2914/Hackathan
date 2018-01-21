import mongoose from 'mongoose'
import User from "./User";
import Idea from "./Idea";

const CommentSchema = new mongoose.Schema({
  idea: {type: mongoose.Schema.ObjectId, ref: Idea, required: true},
  user: {type: mongoose.Schema.ObjectId, ref: User},
  description: {type: String, required: true},
}, {timestamp: true});

module.exports = mongoose.model('Comment', CommentSchema);
