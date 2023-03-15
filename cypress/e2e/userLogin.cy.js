describe('Login functionality', () => {
    
    before(function(){
      cy.fixture('testUserData.json').then(function(testData){
        this.testData = testData
      })
    })

    it('Verify use can successfully login with valid credentials & logout', () => {
      cy.fixture('testUserData.json').then(function(testData){
        cy.login(this.testData.testLoginData.username, this.testData.testLoginData.password)
        const greeting = 'Hi, ' + this.testData.testProfileData.firstname
        cy.contains(greeting)
      });
      // Clean up
      cy.logout()
    })

    it('Verify user can see login error with invalid credentials', () => {
      // Arrange
      cy.visit('/')
      cy.get('input[name=login]').type('username')
      cy.get('input[name=password]').type('password', { sensitive:true })
      cy.contains('Login').click()
      cy.contains('Invalid username/password')
    })

  })