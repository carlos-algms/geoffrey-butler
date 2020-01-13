import webserver from './webserver';
import livenessRoute from './routes/liveness';

livenessRoute(webserver);

export { webserver };
