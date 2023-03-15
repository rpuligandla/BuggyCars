describe('Vote', () => {
    it('Verify only authenticated users can comment', () => {

        cy.visit('/')
        cy.readFile('cypress/fixtures/testUserData.json').then((testData) => {
            cy.login(testData.testLoginData.username, testData.testLoginData.password)
        });
        cy.get('a[href="/overall"]').click();
        cy.contains('View more').click()
        cy.get('textarea[id=comment]').should('be.visible')
        cy.contains('button', 'Vote').should('be.visible')
        cy.logout()

        cy.get('.card-text').should('be.visible')
        return cy.get('.card-text').invoke('text')
    })
})


