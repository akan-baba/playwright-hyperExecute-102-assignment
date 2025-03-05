import { test, expect } from '@playwright/test';

test("Simple Form Demo Test - Validate Message Display", async ({ page }) => {
    // Step 1: Navigate to LambdaTest Selenium Playground
    await page.goto("https://www.lambdatest.com/selenium-playground", { timeout: 120000, waitUntil: 'domcontentloaded' });
  
    // Step 2: Click on the "Simple Form Demo" link
    await page.getByText("Simple Form Demo").click();
  
    // Step 3: Verify that the URL contains "simple-form-demo"
    await expect(page).toHaveURL(/simple-form-demo/);
  
    // Step 4: Define a test message variable
    const testMessage = "Welcome to LambdaTest";
  
    // Step 5: Enter the test message into the "Enter Message" text box
    await page.fill("#user-message", testMessage);
  
    // Step 6: Click the "Get Checked Value" button
    await page.click("#showInput");
  
    // Step 7: Wait for the result text to appear
    await page.waitForSelector("#message", { state: "attached", timeout: 120000 });
  
    // Step 8: Retrieve and validate the displayed message
    const displayedMessage = await page.locator("#message").textContent();
    console.log("Displayed Message:", displayedMessage); // Debugging output
  
    await expect(page.locator("#message")).toContainText(testMessage);
  });
