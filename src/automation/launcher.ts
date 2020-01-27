import puppeteer from 'puppeteer';

export const launchPage = async (url?: string) => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
	});

	const page = await browser.newPage();

	if (url) {
		await page.goto(url, { waitUntil: 'networkidle0' });
	}

	return { browser, page };
};
