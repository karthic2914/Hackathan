import * as  mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { skillSet, EXPIRATION_TIME, HACKER_ROLE } from '../utils/constant';

export type UserModel = mongoose.Document & {
    username: string,
    email: string,
    hashPassword: string,
    isAdmin: boolean,
    userRole: string,
    confirmed: boolean,
    profile: {
        firstName: string,
        lastName: string,
        skillSet: string[],
        profileImage: {
            public_id: string,
            url: string
        },
        contact: string
    },

    isValidPassword: (password: string) => boolean,
    setPassword: (password: string) => void,
};

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
        skillSet: [{type: String, enum: skillSet}],
        profileImage: {
            public_id: {type: String, default: ''},
            url: {type: String, default: ''},
        },
        contact: {type: String, default: ''}
    }
}, {timestamps: true});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.isValidPassword = function isValidPassword(password: string) {
    return bcrypt.compareSync(password, this.hashPassword);
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
    });
};

UserSchema.methods.toAuthJson = function toAuthJson() {
    return {
        token: this.generateJWT()
    };
};

UserSchema.methods.setPassword = function setPassword(password: string) {
    this.hashPassword = bcrypt.hashSync(password, 10);
};

export default mongoose.model<UserModel>('User', UserSchema);