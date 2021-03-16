import { GOOGLE_APP_ID, GOOGLE_APP_SECRET, SERVER_URL } from "~/environments";

export const GOOGLE_STRATEGY_CONFIG = 'GOOGLE_STRATEGY_CONFIG';

export const GOOGLE_BASE_REDIRECT = `${SERVER_URL}google`;

export const googleStrategyConfig = {
    clientID: GOOGLE_APP_ID,
    clientSecret: GOOGLE_APP_SECRET,
    callbackURL: `${GOOGLE_BASE_REDIRECT}/redirect`,
    scope: ['email', 'profile'],
    passReqToCallback: true,
}