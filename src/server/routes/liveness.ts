import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => res.json({ live: true }));

export default route;
