import { test, expect } from '@playwright/test';



test('Click Input Form Submit.', async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground", { timeout: 120000, waitUntil: 'domcontentloaded' });
    await page.getByText('Input Form Submit').click();
    await page.locator(".bg-lambda-900").click()
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Please fill out this field'); await dialog.dismiss(); // Dismiss the dialog to continue the test });

    });
})

test('fill Input Form and submit.', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground", { timeout: 120000, waitUntil: 'domcontentloaded' });
    await page.getByText('Input Form Submit').click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Jane Doe')
    await page.getByRole('textbox', { name: 'Email*' }).fill('admin@example.')
    await page.getByRole('textbox', { name: 'Password*' }).fill('red123')
    await page.getByRole('textbox', { name: 'Company' }).fill('genesis')
    await page.locator('#websitename').fill('https://www.genesis.com')
    await page.locator("select[name='country']").selectOption('US')
    await page.locator('#inputCity').fill('Tallahassee')
    await page.locator('#inputAddress1').fill('2')
    await page.locator('#inputAddress2').fill('Moss grange')
    await page.locator('#inputState').fill('Florida')
    await page.locator('#inputZip').fill('32953')
    await page.locator('.bg-lambda-900').click()
    const locator = page.locator('.success-msg.hidden');
    await expect(locator).toContainText('Thanks for contacting us, we will get back to you shortly.');
    


});




