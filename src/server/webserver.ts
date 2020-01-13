import express from 'express';
import bodyParser from 'body-parser';

const PORT = 3000;

const webserver = express();

webserver.use(bodyParser.json());
webserver.use(bodyParser.urlencoded({ extended: true }));

webserver.listen(PORT, () => {
	console.log(`webserver running on port ${PORT}`);
});

export default webserver;
