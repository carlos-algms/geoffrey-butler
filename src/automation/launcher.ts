import puppeteer from 'puppeteer';

export const launchPage = async (url?: string) => {
	// Launch a browser
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	});

	// Visit the page a get content
	const page = await browser.newPage();

	if (url) {
		await page.goto(url, { waitUntil: 'networkidle0' });
	}

	return { browser, page };
};
