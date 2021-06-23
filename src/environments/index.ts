import * as dotenv from 'dotenv';
dotenv.config()

// ------- ENVIRONMENT -------
export const NODE_ENV_TYPES = {
    DEV: 'development',
    PROD: 'production',
    TEST: 'test',
};
export const NODE_ENV: string = process.env.NODE_ENV || NODE_ENV_TYPES.DEV;
export const isDevelopment: boolean = NODE_ENV === NODE_ENV_TYPES.DEV;
export const isProduction: boolean = NODE_ENV === NODE_ENV_TYPES.PROD;

// ------- APPLICATION -------
export const SERVER_PORT: number = parseInt(process.env.SERVER_PORT, 10);
export const SERVER_HOST: string = process.env.SERVER_HOST;
export const SERVER_URL: string = process.env.SERVER_URL;

export const MICROSERVICE_URL: string = process.env.MICROSERVICE_URL;