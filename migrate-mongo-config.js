// In this file you can configure migrate-mongo

const config = {
  mongodb: {
    url: "mongodb://almalif:secret@localhost:27017/mdsync_db?authSource=mdsync_db",

    databaseName: "mdsync_db",

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: "migrations",

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog"
};

//Return the config as a promise
module.exports = config;
