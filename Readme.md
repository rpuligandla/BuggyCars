## Test Approach for [Buggy Cars Rating](https://buggy.justtestit.org/) application

<p>The test approach for the application starts with understanding the major functionalities in the application. As there is no specific requirement document available, the plan is to conduct some exploratory manual testing on application to find the use cases and bugs if there are any. Once the functionality is understood, then start planning of writing automation scripts for regression purposes. </p>

The types of the testing for the project is conducted as below,

1. Exploratory Test
2. Automation Test

## Buggy Cars Rating Automated End-to-End tests

These tests are end-to-end tests for [Buggy Cars Rating](https://buggy.justtestit.org/) using [Cypress](https://www.cypress.io/) and JavaScript as programming language.

### Prerequisites
1. Install [node](https://nodejs.org/en/download/) based on your OS
2. Download Visual Studio (VS) Code or any IDE as your preference
3. Install Cypress <br>
``
npm install cypress --save-dev
``
4. Clone or download the repo from github<br>
    https://github.com/rpuligandla/BuggyCars.git <br>
``
git clone git@github.com:rpuligandla/BuggyCars.git
``

### How to run tests
#### To run all tests execute  command in terminal <br>
``
npx cypress run
``

#### How to run tests using Cypress UI
1. Execute  command in terminal <br>
``
npx cypress open
``
2. Select E2E Testing
3. Select a browser
4. Select Start E2E Testing
5. From the specs, execute the tests which you like