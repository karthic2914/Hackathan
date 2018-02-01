import User, { UserModel } from '../models/User';
import { default as Idea, IdeaModel } from '../models/Idea';

const ADMIN_EMAIL = 'admin@aegon.com';

export const createAdminUser = () => {
    User.findOne({email: ADMIN_EMAIL}).then(user => {
        if (!user) {
            const user = new User({
                username: 'admin', email: ADMIN_EMAIL, isAdmin: true, userRole: 'admin', confirmed: true,
                'profile.firstName': 'admin'
            });
            user.setPassword('admin@123');
            user.save()
                .then(user => console.log('Created admin user: email=', user.email, ', username=', user.username))
                .catch(err => console.log('Error caught while creating admin: ', err));
        } else {
            console.log('Admin user already exists: email=', user.email, ', username=', user.username);
        }
    });
};

export const createHackerUser = () => {
    User.findOne({email: 'hacker@aegon.com'}).then(user => {
        if (!user) {
            const user = new User({
                username: 'hacker', email: 'hacker@aegon.com', confirmed: true,
                'profile.firstName': 'akash', 'profile.lastName': 'sethi'
            });
            user.setPassword('hacker@123');
            user.save()
                .then(user => {
                    createIdeas(user);
                    console.log('Created hacker user: email=', user.email, ', username=', user.username);
                })
                .catch(err => console.log('Error caught while creating admin: ', err));
        } else {
            console.log('Hacker user already exists: email=', user.email, ', username=', user.username);
        }
    });
};

const createIdeas = (user: UserModel) => {
    Idea.count({}, function (err, records) {
        if (!records) {
            new Idea({
                teamName: 'Team 1', title: 'Bootstraped title', description: 'This is test description',
                technologyTags: ['Java', 'Groovy', 'Node'], status: 'approved', createdBy: user
            })
                .save()
                .then((idea: IdeaModel) => console.log('Created Idea: title: ', idea.title))
                .catch(err => console.log('Error caught while creating Idea: ', err));
        } else {
            console.log('Idea records already exist');
        }
    });
};
