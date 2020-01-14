import webserver from './webserver';

const PORT = 3000;

webserver.listen(PORT, () => {
	console.log(`webserver running on port ${PORT}`);
});

export { webserver };
