import { test, expect } from '@playwright/test';

test('Drag & Drop Sliders - validate range value shows 95', async ({ page }) => {
    // Step 1: Open the URL
  
    await page.goto("https://www.lambdatest.com/selenium-playground", { timeout: 120000, waitUntil: 'domcontentloaded' });
  
    // Step 2: Click on "Drag & Drop Sliders" under "Progress Bars & Sliders"
    await page.click('text=Drag & Drop Sliders');
  
    // Step 3: Select the slider "Default value 15" and drag the bar to make it 95
    const slider = await page.locator('input[value="15"]'); // Adjust this selector if needed
    const boundingBox = await slider.boundingBox();
  
    if (boundingBox) {
      let sliderStartX = boundingBox.x + boundingBox.width / 2; // Start at the center of the slider
      const sliderStartY = boundingBox.y + boundingBox.height / 2; // Center vertically
  
      let currentValue = 15;
  
      while (currentValue < 95) {
        await page.mouse.move(sliderStartX, sliderStartY);
        await page.mouse.down();
        await page.mouse.move(sliderStartX + 5, sliderStartY); // Move in small increments
        await page.mouse.up();
  
        currentValue = parseInt((await page.locator('#rangeSuccess').textContent()).trim(), 10);
        sliderStartX += 5; // Update the starting X position for the next increment
      }
  
      // Validate whether the range value shows 95
      const rangeValue = (await page.locator('#rangeSuccess').textContent()).trim();
      expect(rangeValue).toBe('95'); // Trim any whitespace for a reliable comparison
    }
  });
  
  