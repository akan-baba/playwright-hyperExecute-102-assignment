# Playwright HyperExecute Automation

This project demonstrates running **Playwright** tests using **LambdaTest HyperExecute** for smart test orchestration on both Windows and Linux environments.

## 📌 Prerequisites

Before running the tests, ensure you have the following:

1. **Basic Knowledge** of:
   - Playwright automation framework.
   - HyperExecute smart test orchestration platform.
   - YAML-based test execution configurations (Auto-split, Matrix-based execution, Secrets management).
   - Running **cross-browser tests** (Serial & Parallel execution) on **HyperExecute Cloud Grid**.

2. **Installed Dependencies**:
   - Node.js 16+ and npm
   - `npm-run-all` package (for running both Windows and Linux scripts in parallel)

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/playwright-hyperexecute.git
cd playwright-hyperexecute
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Download and Configure HyperExecute
To run tests using HyperExecute, **download and set up the HyperExecute CLI**:

```sh
# Download HyperExecute
curl -O https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute

# Make it executable
chmod +x hyperexecute

# Move it to a system-wide location
sudo mv hyperexecute /usr/local/bin/hyperexecute
```

> ✅ **Ensure HyperExecute CLI is accessible by running:**
```sh
hyperexecute --version
```

## 🎭 Running Playwright Tests

Run Playwright tests locally before executing them on HyperExecute.

```sh
npx playwright test --config=./playwright.config.js
```

## 🏆 Running Tests on HyperExecute

### ▶️ **Windows Execution**
```sh
npm run hyperexecute:win
```

### ▶️ **Linux Execution**
```sh
npm run hyperexecute:linux
```

### ▶️ **Run Both in Parallel**
To execute tests on both Windows & Linux simultaneously:
```sh
npm run hyperexecute:both
```
This uses **npm-run-all** to run both scripts in parallel.

## 📁 Project Structure
```sh
├── e2e/                    # Playwright test scenarios
├── yaml/                   # HyperExecute YAML configuration files
│   ├── linux/.hyperexecute_matrix.yaml
│   ├── win/.hyperexecute_matrix.yaml
├── .gitpod.yml             # Gitpod workspace setup
├── .gitpod.Dockerfile      # Gitpod Docker configuration
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies & scripts
├── package-lock.json       # Lock file
├── Readme.md               # This file
```

## 🔗 Useful Links
- [LambdaTest HyperExecute Documentation](https://www.lambdatest.com/support/docs/hyperexecute-introduction/)
- [Playwright Documentation](https://playwright.dev/)
- [Node.js Download](https://nodejs.org/en/download/)

---

✅ **Now you are ready to execute your tests seamlessly using Playwright & HyperExecute!** 🚀

