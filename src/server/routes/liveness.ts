import { Express } from 'express';

export default (webserver: Express) => {
	webserver.get('/liveness', (req, res) => res.json({ live: true }));
};
