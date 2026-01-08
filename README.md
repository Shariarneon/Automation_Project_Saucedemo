# SauceDemo Automation Project

This is a professional E-commerce automation testing project built with **Playwright** and **JavaScript**. It follows the **Page Object Model (POM)** pattern and includes **Allure Reporting** for detailed test results.

##  Key Features
* **Dynamic Product Selection:** Tests add random unique products to the cart.
* **Checkout Verification:** Verifies product names, item totals, and tax calculations on the Final Overview page.
* **Page Object Model (POM):** Clean separation of locators and business logic.
* **Allure Reports:** Interactive and visual test reports with graphs.


##  Setup and Installation

1.  **Clone the project** or download the source code.
2.  **Install Dependencies:**
    Open your terminal in the project folder and run:
    
    npm install


##  Running Tests
I have configured several scripts in the `package.json` to make running tests easier.

### 1. Run All Tests

npm run test

### 2. To run a specific test scenario separately

npm run test_Q1

npm run test_Q2

npm run test_Q3

##  Important Note for Q3 (Performance Glitch User)
The test for Performance Glitch User (Q3) involves intentional delays from the application side. Occasionally, this may cause a Timeout Error. If the test fails due to a timeout, please run the test again, and it should pass successfully.

##  Generating Reports
After running the tests, you can generate and view the Allure Report to see detailed steps and visual results.

### 1. Generate the Report

npm run generate_report

### 2. Open the Report

npm run open_report

##  Debugging with Playwright Inspector
If you want to observe the automation steps one by one (Step-through debugging):

1. Open the specific .spec.js files (e.g., tests/Q1.spec.js).

2. Find the line // await page.pause();.

3. Uncomment it by removing the //.

4. Run the tests .


##  Project Structure

- pages/objects.js: Contains all the element locators.

- pages/actions.js: Contains all the reusable functions and logic.

- tests/: Contains the test scripts (Q1, Q2, Q3).

- allure-results/: Raw data for reports.

- playwright.config.js: Configuration for the testing environment.




