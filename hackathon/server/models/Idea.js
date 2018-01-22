import mongoose from 'mongoose'
import User from './User'
import uniqueValidator from 'mongoose-unique-validator'
import {TEAM_TYPE} from '../utils/constant';

const IdeaSchema = new mongoose.Schema({
  teamName: {type: String, required: true, unique: true},
  title: {type: String, required: true},
  technologyTags: [String],
  description: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: User},
  members: [String],
  isApproved: {type: Boolean, default: false},
  teamType: {type: String, enum: TEAM_TYPE}
}, {timestamp: true});

IdeaSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Idea', IdeaSchema);
