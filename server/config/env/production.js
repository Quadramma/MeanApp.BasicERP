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
        callbackURL: 'http://basic-erp-5346.herokuapp.com/auth/facebook/callback' 
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://basic-erp-5346.herokuapp.com/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://basic-erp-5346.herokuapp.com/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://basic-erp-5346.herokuapp.com/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://basic-erp-5346.herokuapp.com/auth/linkedin/callback'
    }
};

