module.exports = {
	'**/*.{js,jsx,ts,tsx}': ['prettier --write', 'git add', 'eslint'],
	'**/*.{json,md,html,ejs}': ['prettier --write', 'git add'],
};
