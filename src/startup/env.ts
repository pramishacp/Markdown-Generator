import dotenv from 'dotenv';
dotenv.config();

// false, null, undefined, 0, -0, 0n, NaN, ""

const env = () => {
    if (!process.env.NODE_ENV) {
        throw new Error('FATAL ERROR: NODE_ENV is not defined.');
    }
    if (!process.env.NODE_DOCKER_PORT) {
        throw new Error('FATAL ERROR: NODE_DOCKER_PORT is not defined.');
    }
}

export default env;