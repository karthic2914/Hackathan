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

export interface IdeaModel extends mongoose.Document {
    teamName: string;
    title: string;
    technologyTags: string[];
    description: string;
    createdBy: typeof mongoose.Schema.Types.ObjectId;
    members: string[];
    isApproved: boolean;
    teamType: string;
}
const InviteTeaSchema = new mongoose.Schema({
    teamName: {type: String, unique: true},
    title: {type: String},
    technologyTags: [String],
    description: {type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: User},
    members: [String],
    isApproved: {type: Boolean, default: false},
    teamType: {type: String, enum: TEAM_TYPE}
}, {timestamps: true});

export interface InviteTeamModel extends mongoose.Document {
    teamName: string;
    title: string;
    technologyTags: string[];
    description: string;
    createdBy: typeof mongoose.Schema.Types.ObjectId;
    members: string[];
    isApproved: boolean;
    teamType: string;
}


IdeaSchema.plugin(uniqueValidator);

export default mongoose.model('Idea', IdeaSchema);

