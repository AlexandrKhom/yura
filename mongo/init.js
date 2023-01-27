db = db.getSiblingDB('lesson');
db.createUser(
    {
        user: "user",
        pwd: "user",
        roles: [
            {
                role: "readWrite",
                db: "lesson"
            }
        ]
    }
);
db.auth('user', 'user');

// db.createCollection('users');
// db.users.insertOne( {
//     firstName: 'Damian Wajdlich',
//     email: 'swiety85@gmail.com',
//     password: '$2a$12$fY5Qu3P691/a.KpU/SvJx.fyIodkacAern3D9IwOFmvtEiKDvYlX.' // =password
// });
