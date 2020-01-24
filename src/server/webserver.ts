import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import livenessRoute from './routes/liveness';
import automationRoute from './routes/automation';

const webserver = express();

const STATIC_FOLDER = path.resolve(__dirname, '../../static');
const staticHandler = express.static(STATIC_FOLDER);

webserver.use(cors({ origin: true }));
webserver.use(bodyParser.json());
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use('/liveness', livenessRoute);
webserver.use('/automation', automationRoute);
webserver.use('/static', staticHandler);
webserver.use('/', staticHandler);

export default webserver;
