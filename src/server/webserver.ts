import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import livenessRoute from './routes/liveness';
import automationRoute from './routes/automation';

const webserver = express();

webserver.use(cors({ origin: true }));
webserver.use(bodyParser.json());
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use('/liveness', livenessRoute);
webserver.use('/automation', automationRoute);

export default webserver;
