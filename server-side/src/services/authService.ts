import { default as User } from '../models/User';
import { parseErrors } from '../utils/errorParser';

export const login = (credential: any, callback: any) => {
    User.findOne({email: credential.email}).then((user: any) => {
        if (!user || !user.isValidPassword(credential.password)) {
            return callback({errors: {global: 'no user found'}}, undefined);
        }
        return callback(undefined, user);
    });
};

export const signUp = (data: any, callback: any) => {
    const user = new User({username: data.username, email: data.email, 'profile.skillSet': data.skillSet});
    user.setPassword(data.password);
    user.save()
        .then((user: any) => callback(undefined, user))
        .catch((err: any) => callback(parseErrors(err.errors), undefined));
};
