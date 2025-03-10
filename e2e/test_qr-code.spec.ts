import { expect, test } from '@playwright/test';

// Test setup - adjust the URL to match your app's URL structure
const testUrl = '/';
const expectedImageSrc = './images/image-qr-code.png';
const expectedTitle = 'Improve your front-end skills by building projects';
const expectedDescription =
	'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

test.describe('QR Code Component', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to the page containing the QR code component
		await page.goto(testUrl);
	});

	test('should display card class', async ({ page }) => {
		// Check if the element with card class exists
		const card = page.locator('.card');
		await expect(card).toBeVisible();
	});

	test('should display the QR code image with correct source', async ({ page }) => {
		// Check if the QR code image exists
		const qrCodeImage = page.locator('.qrcode img');
		await expect(qrCodeImage).toBeVisible();

		// Check if the image has the correct source
		await expect(qrCodeImage).toHaveAttribute('src', expectedImageSrc);

		// Check if the image has proper alt text
		await expect(qrCodeImage).toHaveAttribute('alt', 'qr code');
	});

	test('should display the correct title', async ({ page }) => {
		// Check if the title exists and has correct text
		const title = page.locator('.description h1');
		await expect(title).toBeVisible();
		await expect(title).toHaveText(expectedTitle);
	});

	test('should display the correct description', async ({ page }) => {
		// Check if the description exists and has correct text
		const description = page.locator('.description p');
		await expect(description).toBeVisible();
		await expect(description).toHaveText(expectedDescription);
	});
});
