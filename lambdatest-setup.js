const base = require("@playwright/test");
const path = require("path");
const { chromium } = require("playwright");

// LambdaTest capabilities
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: process.env.HYPEREXECUTE_PLATFORM,
    build: "Playwright HyperExecute Build",
    name: "Playwright HyperExecute Test",
    user: process.env.LT_USERNAME || "eskor.baba",
    accessKey:
      process.env.LT_ACCESS_KEY ||
      "6l4UrYtoT89IXVc1Isw0Ytl1mH5wl4q2XYH8cAqVoms4ev2gD1",
    // 'network': true,
    video: true,
    console: true,
    network: true,
  },
};

// Patching the capabilities dynamically according to the project name.
const modifyCapabilities = (configName, testName) => {
  let config = configName.split("@lambdatest")[0];
  let [browserName, browserVersion] = config.split(":");
  capabilities.browserName = browserName
    ? browserName
    : capabilities.browserName;
  capabilities.browserVersion = browserVersion
    ? browserVersion
    : capabilities.browserVersion;
  // capabilities['LT:Options']['platform'] = platform ? platform : capabilities['LT:Options']['platform']
  capabilities["LT:Options"]["name"] = testName;
};

const getErrorMessage = (obj, keys) =>
  keys.reduce(
    (obj, key) => (typeof obj == "object" ? obj[key] : undefined),
    obj
  );

exports.test = base.test.extend({
  page: async ({ page, playwright }, use, testInfo) => {
    // Configure LambdaTest platform for cross-browser testing
    let fileName = testInfo.file.split(path.sep).pop();
    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(
        testInfo.project.name,
        `${testInfo.title} - ${fileName}`
      );

      const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities)
        )}`,
      });

      const ltPage = await browser.newPage(testInfo.project.use);
      await use(ltPage);

      const testStatus = {
        action: "setTestStatus",
        arguments: {
          status: testInfo.status,
          remark: getErrorMessage(testInfo, ["error", "message"]),
        },
      };
      await ltPage.evaluate(() => {},
      `lambdatest_action: ${JSON.stringify(testStatus)}`);
      await ltPage.close();
      await browser.close();
    } else {
      // Run tests in local in case of local config provided
      await use(page);
    }
  },
});
