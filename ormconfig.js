module.exports = {
   "type": "mysql",
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASS,
   "database": process.env.DB_DATABASE,
   "synchronize": false,
   "logging": true,
   "entitiesDir": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "common/migration/**/*.ts"
   ],
   "subscribers": [
      "common/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "common/entity",
      "migrationsDir": "common/migration",
      "subscribersDir": "common/subscriber"
   }
}
