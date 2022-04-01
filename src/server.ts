import express from 'express';

import routes from './startup/routes';
import logging from './startup/logging';
import config from './startup/config';
import env from './startup/env';
import prod from './startup/prod';

const app = express();

env();
logging();
prod(app);
routes(app);

const server = app.listen(config.app.port, () => console.log(`Listening on ${config.app.env} port ${config.app.port}...`));

module.exports = server;