/* eslint-disable */
import * as functions from 'firebase-functions';
// @ts-ignore
import webserver from './server/webserver';

export const api = functions
	.region('europe-west1')
	.runWith({ memory: '1GB' })
	.https.onRequest(webserver);
