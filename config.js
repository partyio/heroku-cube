var mongo_url = process.env.MONGOLAB_URI,
    params = /mongodb:\/\/(?:(\w+):(\w+)@)?([\w\.]+)(?::(\d+))?\/(\w+)/.exec(mongo_url);

module.exports = {
  "mongo-username": params[1],
  "mongo-password": params[2],
  "mongo-host": params[3],
  "mongo-port": parseInt(params[4]),
  "mongo-database": params[5],
  "http-port": process.env.PORT
};

