
import express from 'express';

import format from './index';

import validate from '../middlewares/validate';

const routes = () => {
        const router = express.Router();
      
        router.post("/", [validate(format.validate.create)], format.routes.create);
      
        return router;
};

export default  routes;