[![Cypress Tests](https://github.com/manoelcyreno/mesdeqa2024/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/manoelcyreno/mesdeqa2024/actions/workflows/main.yml)

# Mes de QA 2024
Repo con relación a lo que vamos a trabajar en el Mes de QA 2024

## Prerequisites

Make sure you have the following installed before getting started:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Cypress: Installation and setup guide for Cypress [Cypress Docs](https://docs.cypress.io/guides/getting-started/installing-cypress.html)

## Useful commands
- `npm install` -> Install all dependencies
- `npm run test` -> Run all tests in headless mode on the test environment
- `npm run test:ui` -> Run all tests using an User Interface on the test environment

### Commands about specific group of tests
- `npm run test:e2e` -> Run all e2e tests in headless mode on the test environment
- `npm run test:api` -> Run all api tests in headless mode on the test environment

### Commands about smoke tests
- `npm run test:smoke` -> Run all critical tests in headless mode on the test environment
- `npm run test:smoke:e2e` -> Run all critical e2e tests in headless mode on the test environment

## How to run the tests in local
- Clone the project -> `git clone https://github.com/manoelcyreno/mesdeqa2024.git`
- Go to the root folder of the project -> `cd mesdeqa2024`
- Install all dependencies -> `npm install`
- Run all tests in headless mode -> `npm run test`
