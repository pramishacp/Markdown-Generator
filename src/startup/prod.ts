import helmet from "helmet";
import responseTime from 'response-time';

const prod = (app) => {
    app.use(helmet());
    app.use(responseTime())
}

export default prod;