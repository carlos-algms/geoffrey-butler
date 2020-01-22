import webserver from './webserver';

const PORT = 80;

webserver.listen(PORT, () => {
	console.log(`webserver running on port ${PORT}`);
});

export { webserver };
