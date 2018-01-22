import User from '../models/User'
import {parseErrors} from "../utils/errorParser";

module.exports = {
  auth: (credential, callback) => {
    User.findOne({email: credential.email}).then(user => {
      if (!user || !user.isValidPassword(credential.password)) {
        return callback({errors: {global: 'no user found'}}, null)
      }
      return callback(null, user)
    });
  },

  signup: (data, callback) => {
    let user = new User({username: data.username, email: data.email, 'profile.skillSet': data.skillSet});
    user.setPassword(data.password);
    user.save()
      .then(user => callback(null, user))
      .catch(err => callback(parseErrors(err.errors), null))
  },
};
