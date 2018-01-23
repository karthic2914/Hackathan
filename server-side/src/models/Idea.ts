import * as mongoose from 'mongoose';
import * as User from './User';
import * as uniqueValidator from 'mongoose-unique-validator';
import { TEAM_TYPE } from '../utils/constant';

const IdeaSchema = new mongoose.Schema({
    teamName: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    technologyTags: [String],
    description: {type: String, required: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: User},
    members: [String],
    isApproved: {type: Boolean, default: false},
    teamType: {type: String, enum: TEAM_TYPE}
}, {timestamps: true});

IdeaSchema.plugin(uniqueValidator);

export default mongoose.model('Idea', IdeaSchema);