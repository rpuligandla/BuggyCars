describe('Vote', () => {

    beforeEach(function(){
        cy.register()
        cy.readFile('cypress/fixtures/testUserData.json').then((testData) => {
            cy.login(testData.testLoginData.username, testData.testLoginData.password)
        });
        cy.get('a[href="/overall"]').click();
        cy.contains('View more').click()
        })

    afterEach(function (){
        cy.logout()
    })

    it('Vote submitted successfully, and vote count increased', () => {
        let initialVoteCount;
        cy.get('h4 > strong').invoke('text').then(textValue => {
            initialVoteCount = parseInt(textValue);
            cy.contains('button', 'Vote').click()
            cy.contains('Thank you for your vote!')
            cy.get('h4 > strong').then(() => {
                cy.get('h4 > strong').invoke('text').then(newVoteCount => {
                    const expectedValue = initialVoteCount + 1;
                    expect(parseInt(newVoteCount)).to.equal(expectedValue);
                });
            });
        });
    })

    it('User commented successfully, and commented added to the table', () => {

        const randomNumber = () => Cypress._.random(0, 1e6)
        const randomString = randomNumber()
        const comment = `This is my ${randomString} comment`

        cy.get('h4 > strong')
        cy.get('textarea[id=comment]').type(comment)
        cy.contains('button', 'Vote').click()
        cy.get('table tbody tr').first().within(() => {
            cy.get('td').eq(2).should('have.text', comment)
        })
    })

})
