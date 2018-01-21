import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const skillSet = ['Angular', 'Node', 'Java', 'Testing', 'Javascript'];

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, index: true, lowercase: true, unique: true},
  hashPassword: {type: String},
  isAdmin: {type: Boolean, default: false},
  userRole: {type: String, default: 'hacker'},
  confirmed: {type: Boolean, default: false},
  profile: {
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    skillSet: {type: String, enum: skillSet},
    profileImage: {
      public_id: {type: String, default: ''},
      url: {type: String, default: ''},
    },
    contact: {type: String, default: ''}
  }
}, {timestamp: true});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
