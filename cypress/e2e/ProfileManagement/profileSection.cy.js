import * as profileSection from './profileSection.js'
describe('Profile', () => {
  
  beforeEach(() => {
    cy.fixture('testData.json').then(function(testData){
      this.testData = testData
    })
    cy.fixture('testData.json').then(function(testData){
      cy.login(this.testData.testLoginData.username, this.testData.testLoginData.password)
      const greeting = 'Hi, ' + this.testData.testProfileData.firstname
      cy.contains(greeting)
      cy.contains('Profile').click()
    });
  })
  
  it('successfully loads user profile', () => {
    cy.contains('Basic').should('be.visible')
    cy.contains('Additional Info').should('be.visible')
    cy.contains('Additional Info').should('be.visible')
  })

  it('Verify basic user info can be found under user profile', () => {
    cy.fixture('testData.json').then(function(testData){
      profileSection.getUsername().should('have.value', testData.testProfileData.username)
      profileSection.getFirstname().should('have.value', testData.testProfileData.firstname)
      profileSection.getLastname().should('have.value', testData.testProfileData.lastname)
          
    })
  })

  it('Verify user can change his Gender', () => {
    const gender = 'male'
    profileSection.getGender().clear()
    profileSection.getGender().type(gender)
    profileSection.getSave().click()
    profileSection.getGender().should('have.value', gender)
          
  })

  it('Verify user can change his Age', () => {
    const age = 19
    profileSection.getAge().clear()
    profileSection.getAge().type(age)
    profileSection.getSave().click()
    profileSection.getAge().should('have.value', age)
          
  })

  it('Verify Age only accepts interger values', () => {
    const age = 'asdf'
    profileSection.getAge().clear()
    profileSection.getAge().type(age)
    profileSection.getSave().click()
    profileSection.getAgeError().should('be.visible')
          
  })

  it('Verify user can change his Address', () => {
    const address = '19/23 Awamutu Grove, Lower Hutt'
    profileSection.getAddress().clear()
    profileSection.getAddress().type(address)
    profileSection.getSave().click()
    profileSection.getAddress().should('have.value', address)
          
  })

  it('Verify user unable to user letters in Phone', () => {
    const phone = 'asdfg'
    profileSection.getPhone().clear()
    profileSection.getPhone().type(phone)
    profileSection.getPhone().should('be.empty')
    profileSection.getPhone().should('not.have.value', phone)
  })

  it('Verify user can change his Phone', () => {
    const phone = '1234567890'
    profileSection.getPhone().clear()
    profileSection.getPhone().type(phone)
    profileSection.getSave().click()
    profileSection.getPhone().should('have.value', phone)
          
  })

  it('Verify user unable change his Hobby', () => {
    const hobby = 'Drawing'
    profileSection.getHobby().select(hobby)
    profileSection.getHobby().should('have.value', hobby)
    profileSection.getSave().click()
    profileSection.getSuccessMessage().should('be.visible')
    profileSection.getHobby().should('have.value', hobby)
  })
  
})
  
  
  
  