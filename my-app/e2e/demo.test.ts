import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});
test('home page has expected title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('My App');
})
test('home page has expected text', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('p')).toContainText('Welcome to SvelteKit');
})
test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.locator('h1')).toBeVisible();
});
test('about page has expected title', async ({ page }) => {
	await page.goto('/about');
	await expect(page).toHaveTitle('About');
})
test('about page has expected text', async ({ page }) => {
	await page.goto('/about');
	await expect(page.locator('p')).toContainText('This is the about page');
})