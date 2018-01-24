import * as mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    isActive: {type: Boolean, default: true},
    imageUrl: {type: String},
    likes: {type: Number, default: 30 }
}, {timestamps: true});

export interface BlogModel extends mongoose.Document {
    title: string;
    description: string;
    isActive: boolean;
    imageUrl: string;
    likes: number;
}

export default mongoose.model('Blog', blogSchema);