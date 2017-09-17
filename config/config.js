var env = process.env.ENV || 'dev'
, path = require('path')
, configs = {};

configs.dev = {
    port: 1300,
    httpsPort: 1301,
    dashboardUsers: [{
        user: 'root',
        pass: 'r00t'
    }],
    parseServer: {
        databaseURI: 'mongodb://root:r00t@just-scan-shard-00-00-rwmip.mongodb.net:27017,just-scan-shard-00-01-rwmip.mongodb.net:27017,just-scan-shard-00-02-rwmip.mongodb.net:27017/just-scan?ssl=true&replicaSet=just-scan-shard-0&authSource=admin',
        cloud: path.resolve('./cloud/main.js'),
        appId: process.env.APP_ID || 'just-scan-id',
        appName: 'JustScan.App',
        masterKey: 'just-scan-masterkey', //Add your master key here. Keep it secret!
        serverURL: process.env.SERVER_URL || `http://localhost:1300/parse`,  // Don't forget to change to https if needed
        // liveQuery: {
        //   classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
        // }
    },
    allowInsecureHttp: true
}

configs.local = {
    port: 1310,
    httpsPort: 1311,
    dashboardUsers: [{
        user: 'root',
        pass: 'r00t'
    }],
    parseServer: {
        databaseURI: 'mongodb://root:r00t@just-scan-shard-00-00-rwmip.mongodb.net:27017,just-scan-shard-00-01-rwmip.mongodb.net:27017,just-scan-shard-00-02-rwmip.mongodb.net:27017/just-scan?ssl=true&replicaSet=just-scan-shard-0&authSource=admin',
        cloud: path.resolve('./cloud/main.js'),
        appId: process.env.APP_ID || 'just-scan-id',
        appName: 'JustScan.App',
        masterKey: 'just-scan-masterkey', //Add your master key here. Keep it secret!
        serverURL: process.env.SERVER_URL || `http://localhost:1310/parse`,  // Don't forget to change to https if needed
        // liveQuery: {
        //   classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
        // }
    },
    allowInsecureHttp: true
}

module.exports = configs[env];