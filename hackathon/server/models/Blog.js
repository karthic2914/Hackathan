import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  isActive: {type: Boolean, default: true}
}, {timestamp: true});

module.exports = mongoose.model('Blog', BlogSchema);
