const winston = require('winston');
const mongoose = require('mongoose');
const config = require('../config/config');

const connect = async () => {
    const connString = `mongodb+srv://${config.mongodb.userName}:${config.mongodb.password}@psl-cluster-main.tuomn.mongodb.net/${config.mongodb.databaseName}?retryWrites=true&w=majority`;
    await mongoose.connect(connString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(() => winston.info('Connected to MongoDB...'));
}
module.exports = connect;
