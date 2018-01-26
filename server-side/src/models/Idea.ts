import * as mongoose from 'mongoose';
import User, { UserModel } from './User';
import * as uniqueValidator from 'mongoose-unique-validator';
import { TEAM_TYPE } from '../utils/constant';

const IdeaSchema = new mongoose.Schema({
    teamName: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    technologyTags: [String],
    description: {type: String, required: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: User},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: User}],
    isApproved: {type: Boolean, default: false},
    teamType: {type: String, enum: TEAM_TYPE}
}, {timestamps: true});

export interface IdeaModel extends mongoose.Document {
    teamName: string;
    title: string;
    technologyTags: string[];
    description: string;
    createdBy: UserModel;
    members: UserModel[];
    isApproved: boolean;
    teamType: string;
}

IdeaSchema.plugin(uniqueValidator);

export default mongoose.model<IdeaModel>('Idea', IdeaSchema);