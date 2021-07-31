const winston = require('winston');
require('express-async-errors');

const { File, Console } = winston.transports;

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.simple(),
    defaultMeta: { service: 'ralphs-movie-list-backend' },
    transports: [
        new File({
            filename: 'logs/ralphs-movie-list-backend-logs.log',
            level: 'error',
            handleExceptions: true
        }),
        new Console({
            level: 'info',
            handleExceptions: true
        }),
    ],
    exceptionHandlers: [
        new File({
            filename: 'logs/ralphs-movie-list-backend-logs-unhandled.log'
        })
    ]
});

logger.rejections.handle(
    new File({ filename: 'ralphs-movie-list-backend-rejections.log' })
);

module.exports = logger;
