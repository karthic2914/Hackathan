import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import uniqueValidator from 'mongoose-unique-validator'
import {skillSet, EXPIRATION_TIME, HACKER_ROLE} from "../utils/constant";

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, index: true, lowercase: true, unique: true},
  hashPassword: {type: String},
  isAdmin: {type: Boolean, default: false},
  userRole: {type: String, default: HACKER_ROLE},
  confirmed: {type: Boolean, default: false},
  profile: {
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    skillSet: [{type: String, enum: skillSet}],
    profileImage: {
      public_id: {type: String, default: ''},
      url: {type: String, default: ''},
    },
    contact: {type: String, default: ''}
  }
}, {timestamp: true});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.hashPassword)
};

UserSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
    email: this.email,
    username: this.username,
    isAdmin: this.isAdmin,
    profile: {
      skillSet: this.skillSet
    }
  }, process.env.SECRET_KEY, {
    expiresIn: EXPIRATION_TIME
  })
};

UserSchema.methods.toAuthJson = function toAuthJson() {
  return {
    token: this.generateJWT()
  }
};

UserSchema.methods.setPassword = function setPassword(password) {
  this.hashPassword = bcrypt.hashSync(password, 10);
};

module.exports = mongoose.model('User', UserSchema);
