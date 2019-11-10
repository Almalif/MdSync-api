# MdSync-api

Collaborative Markdown editor api. It allows you to simply create a shared document and work with your team quickly.

## Install

The app is dockerized, so the only thing you need to run to install and launch it :

`docker-compose up # add -d if you want to launch it in background`

## Environment

In order to run the app, those environment variables needs to be set :

| Variable name              | Example value                                                           |
| -------------------------- | ----------------------------------------------------------------------- |
| MONGODB_URI                | mongodb://almalif:secret@localhost:27017/mdsync_db?authSource=mdsync_db |
| MONGO_INITDB_ROOT_USERNAME | admin                                                                   |
| MONGO_INITDB_ROOT_PASSWORD | admin123                                                                |
| MONGO_INITDB_DATABASE      | mdsync_db                                                               |
| MONGO_NON_ROOT_USERNAME    | almalif                                                                 |
| MONGO_NON_ROOT_PASSWORD    | secret                                                                  |
| MONGO_NON_ROOT_ROLE        | readWrite                                                               |
| SECRET_KEY_JWT             | jwt                                                                     |
