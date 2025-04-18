// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.spec.js",
  timeout: 120000,
  globalTimeout: 600000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: "html",

  use: {
    baseURL: "https://www.lambdatest.com/selenium-playground",
    browserName: "chromium",
    video: "on",
    trace: "retain-on-failure",
    screenshot: "on",
    console: "on",
    network: "on",
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
      name: "chrome:latest@lambdatest",
      use: {
        viewport: { width: 1280, height: 720 },
        browserName: "firefox",
        video: "on",
        trace: "on",
        screenshot: "on",
        console: "on",
        network: "on",
      },
    },
    {
      name: "pw-firefox:latest@lambdatest",
      use: {
        viewport: { width: 1280, height: 720 },
        browserName: "firefox",
        video: "on",
        trace: "on",
        screenshot: "on",
        console: "on",
        network: "on",
      },
    },
  ],
});
