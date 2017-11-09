module.exports = {
    db: {
        uri: process.env.DB_CONNECTION + '/' +  process.env.DB_NAME,
        options:{
                 useMongoClient: true,
                 autoIndex: false, // Don't build indexes
                 reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
                 reconnectInterval: 500, // Reconnect every 500ms
                 poolSize: 10, // Maintain up to 10 socket connections
                 // If not connected, return errors immediately rather than waiting for reconnect
                 bufferMaxEntries: 0,
                 promiseLibrary: global.Promise,
                 autoReconnect: true, 
              },
        aclCollectionPrefix: process.env.ACL_COLLECTION_PREFIX
    },
    email: {
        apiKey: process.env.SENDGRID_API_KEY,
        sendFrom: process.env.SEND_EMAILS_FROM
    },
    login: {
        maxAttempts: process.env.MAX_LOGIN_ATTEMPTS,
        lockoutHours: process.env.LOGIN_ATTEMPTS_LOCKOUT_HOURS * 60 * 60 * 1000,
        minimumPasswordLength: process.env.MINIMUM_PASSWORD_LENGTH,
        passwordResetTimeLimitInHours: process.env.PASSWORD_RESET_TIME_LIMIT_IN_HOURS,
        passwordHashRounds: parseInt(process.env.PASSWORD_HASH_ROUNDS, 10)
    },
    server: {
        timezone: process.env.TZ
    },
    session: {
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET
    },

    github: {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://node.js/auth/github/callback"
      },
    
    linkedin: {
        clientID: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_ID,
        callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
      },
    
    twitter: {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
      },

    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_ID,
      callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_ID,
      callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
    transport: {
        smtpHost: process.env.SMTP_HOST,
        smtpPort: process.env.SMTP_PORT,
        smtpSecure: true,
        smtpUser: process.env.SMTP_USER,
        smtpPass: process.env.SMTP_PASSWORD
    },

};
