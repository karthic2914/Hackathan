import * as mongoose from "mongoose";
import * as uniqueValidator from "mongoose-unique-validator";

const skillSet = ["Angular", "Node", "Java", "Testing", "Javascript"];

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, index: true, lowercase: true, unique: true},
  hashPassword: {type: String},
  isAdmin: {type: Boolean, default: false},
  userRole: {type: String, default: "hacker"},
  confirmed: {type: Boolean, default: false},
  profile: {
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    skillSet: {type: String, enum: skillSet},
    profileImage: {
      public_id: {type: String, default: ""},
      url: {type: String, default: ""},
    },
    contact: {type: String, default: ""}
  }
}, {timestamps : true});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model("User", UserSchema);
export default User;