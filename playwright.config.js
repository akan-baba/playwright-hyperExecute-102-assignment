// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.spec.js",
  timeout: 120000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "html",

  use: {
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    {
      name: 'chrome:latest@lambdatest',
      use: {
        viewport: { width: 1280, height: 720 }
      }
    },
    {
      name: 'pw-firefox:latest@lambdatest',
      use: {
        viewport: { width: 1280, height: 720 }
      }
    }
    
  ],

});
