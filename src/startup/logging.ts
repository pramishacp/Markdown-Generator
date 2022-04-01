import * as appRoot from 'app-root-path';

import {
    createLogger,
    transports,
    format,
    add
} from 'winston';

const logging = () => {
    createLogger({
        transports: [
            new transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.prettyPrint()
                )
            })
        ],
        exceptionHandlers: [
            new transports.File({
                filename: `${appRoot}/logs/exceptions.log`
            })
        ]
    });

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    add(new transports.File({
        filename: `${appRoot}/logs/app.log`
    }));
}

export default logging;