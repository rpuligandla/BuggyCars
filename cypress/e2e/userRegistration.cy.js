describe('New user registration', () => {
    
    before(function(){
        cy.fixture('testUserData.json').then(function(testData){
          this.testData = testData
          console.log(testData)
        })
    })

    it('Verify user registration is successful', () => {
      cy.register()
    })

    it(' Verify does not allow same username in registration', () => {
        cy.fixture('testUserData.json').then(testData => {
            cy.visit('/')
            cy.contains('Register').click()
    
            cy.get('input[id=username]').type(testData.testProfileData.username)
            cy.get('input[id=firstName]').type(testData.testProfileData.firstname)
            cy.get('input[id=lastName]').type(testData.testProfileData.lastname)
            cy.get('input[id=password]').type(testData.testProfileData.password)
            cy.get('input[id=confirmPassword]').type(testData.testProfileData.password)
            cy.contains('button', 'Register').click()
        })
    })


  })