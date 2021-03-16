import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, SERVER_URL } from "~/environments";

export const FACEBOOK_STRATEGY_CONFIG = 'FACEBOOK_STRATEGY_CONFIG';

export const facebookStrategyConfig = {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: `${SERVER_URL}facebook/redirect/`,
    scope: "email",
    profileFields: ["emails", "name", "photos"],
    passReqToCallback: true,
}