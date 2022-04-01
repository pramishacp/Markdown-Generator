import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'

import markdown from '../markdown/routes';
import swagger from '../../swagger';
import error from '../middlewares/error';

const routes = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(morgan('tiny'));
    app.use('/api/markdown', markdown());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));
    app.use(error);
};

export default routes