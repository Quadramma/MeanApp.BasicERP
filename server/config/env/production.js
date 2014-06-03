'use strict';

module.exports = {
    //db: 'mongodb://localhost/mean-prod',
    db: 'mongodb://javi:gtf@kahana.mongohq.com:10022/qjarvis',
    app: {
        name: 'BasicERP / Production'
    },
    facebook: {
        clientID: '785833591440723',
        clientSecret: '57f7bbd5a382de427b972556bf342c3c',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};

