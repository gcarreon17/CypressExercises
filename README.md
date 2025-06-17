# AutomationExercise

This is to automate test execution for **Automation Exercise** using **Cypress** and **Mocha** framework. This includes ALL features that can be executed either  **headless** and **headed** modes. 🌐

## Table of Contents 📚

- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [Headless Mode](#headless-mode)
  - [Headed Mode](#headed-mode)
- [Features](#features)

---

## Installation 🛠️

### 1. Create a Project Folder
- This project is to create an automation test suite using Cypress for SuaceDemo website.

### 2. Clone the Repository

```bash
cd ~C:\Users\gcarreon\OneDrive - Vertere Global Solutions, Inc\Desktop\Cypress\cypress>
git clone https://github.com/gcarreon17/cypress.git
```
### 3. Install Dependencies

- Run the following command ton install Cypress and other required dependencies:
 
 ```bash
 npm install
 ```
  Ensure that all dependencies are properly installed by running:
 
 ```bash
 npm list
 ```

 ### 4. Verify Cypress Installation ✅
 
 - Open Cypress to confirm the installation is successful:
 
 ```bash
 npx cypress open
 ```

## Running the Tests 🏃‍♂️
- The test suite can be executed both in **headless** and **headed** modes.

### Headless Mode 🧑‍💻 (Without Browser UI)

1. Login Test (Headless)
- To run the login test in headless mode:

```bash
npm run "login-test": "npx cypress run --spec 'cypress/e2e/login.cy.js' --browser chrome"
```

2. Login Test (Headed)
- To run the login test in headed mode:

```bash
npm run "test": "npx cypress open
```

### Headed Mode 🖥️ (With Browser UI)
- In headed mode, the browser runs with a visible UI. This mode is useful for debugging and visual verification of test actions.


## Features ✨

- **Login Test**: Automates the login functionality using valid and invalid credentials on the Automation Exercise website.
- **List of Products**: Automates checking of Product listing if displayed correctly and completely.
- **Remove Product**: This automates removal of a product in the cart.
- **Add to Car**: This automates adding to cart of product/s that will be checked out.
- **Registration of User**: This automates user registration to login.
- **Payment**: This automates Payment of checked out items.
- **Download Invoice**: This automtes downloading of invoice for the items checked out.



