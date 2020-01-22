import { launchPage } from '../launcher';

export default async () => {
	const { browser, page } = await launchPage('http://www.ismycomputeron.com/');

	const screenshot = await page.screenshot({ encoding: 'base64' });

	await browser.close();
	return screenshot;
};
