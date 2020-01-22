import { Router } from 'express';
import example from '../../automation/example';

const route = Router();

route.get('/example', async (req, res) => {
	try {
		const response = await example();
		const img = Buffer.from(response, 'base64');

		res.writeHead(200, {
			'Content-Type': 'image/png',
			'Content-Length': img.length,
		});

		res.end(img);
	} catch (error) {
		res.status(500).send(error.message);
	}
});

export default route;
