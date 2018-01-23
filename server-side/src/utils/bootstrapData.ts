import User from '../models/User';

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
                .then(user => console.log('Created hacker user: email=', user.email, ', username=', user.username))
                .catch(err => console.log('Error caught while creating admin: ', err));
        } else {
            console.log('Hacker user already exists: email=', user.email, ', username=', user.username);
        }
    });
};
