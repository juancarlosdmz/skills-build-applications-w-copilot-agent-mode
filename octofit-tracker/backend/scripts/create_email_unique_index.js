// This script ensures a unique index on the email field for the users collection in MongoDB.
db.users.createIndex({ "email": 1 }, { unique: true })
