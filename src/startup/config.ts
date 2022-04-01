import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'dev';

const config = {
    'dev': {
        app: {
            port: parseInt(process.env.NODE_DOCKER_PORT),
            env: process.env.NODE_ENV
        },
        chuck: {
            uri: process.env.CHUCK_NORRIS_API
        }
    },
    'test': {
        app: {
            port: parseInt(process.env.NODE_DOCKER_PORT),
            env: process.env.NODE_ENV
        },
        chuck: {
            uri: process.env.CHUCK_NORRIS_API
        }
    },
    'prod': {
        app: {
            port: parseInt(process.env.NODE_DOCKER_PORT),
            env: process.env.NODE_ENV
        },
        chuck: {
            uri: process.env.CHUCK_NORRIS_API
        }
    }
}

export default config[env];