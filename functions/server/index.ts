import * as functions from 'firebase-functions';
import webserver from '../../src/server/webserver';

export const api = functions.https.onRequest(webserver);
