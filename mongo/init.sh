mongo <<EOF
db.createUser(
    {
        user: "admin",
        pwd: "autoauto",
        roles: [
            {
                role: "readWrite",
                db: "backoffice"
            }
        ]
    }
);
db.auth('admin', 'autoauto');
EOF