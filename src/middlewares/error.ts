import * as winston from "winston";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
const error = (err, req, res, next) => {
    /* @typescript-eslint/no-unused-vars */
    winston.error(`${err.status} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(500).send('Something failed.');
};

export default error;