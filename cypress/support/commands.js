// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => { 
    
    cy.visit('/')
    cy.get('input[name=login]').type(username)
    cy.get('input[name=password]').type(password, { sensitive:true })
    cy.contains('Login').click()
  })

  Cypress.Commands.add('logout', () => {
    cy.contains('Logout').click()
    cy.contains('Login')
})

Cypress.Commands.add('register', () => {
  const randomNumber = () => Cypress._.random(0, 1e6)
  const randomString = randomNumber()
  const testNames = `testname${randomString}`
  const password = 'Asdf@123'
  
  cy.visit('/')
  cy.contains('Register').click()

  cy.get('input[id=username]').type(testNames)
  cy.get('input[id=firstName]').type(testNames)
  cy.get('input[id=lastName]').type(testNames)
  cy.get('input[id=password]').type(password)
  cy.get('input[id=confirmPassword]').type(password)
  cy.contains('button', 'Register').click()

  cy.contains('Registration is successful')

  const testLoginData = {
      username: testNames,
      password: password
  }
  const testProfileData = {
    username: testNames,
    password: password,
    firstname: testNames,
    lastname: testNames,
}

  cy.writeFile('cypress/fixtures/testUserData.json', {testLoginData, testProfileData});
})

Cypress.Commands.add('setupTestForVoting', () => {
  //cy.register()
  cy.visit('/')
  cy.readFile('cypress/fixtures/testUserData.json').then((testData) => {
    cy.get('input[name=login]').type(testData.testLoginData.username)
    cy.get('input[name=password]').type(testData.testLoginData.password, { sensitive:true })
    cy.contains('Login').click()
  });
  cy.get('a[href="/overall"]').click();
})