/// <reference types = "cypress" />

describe('Test login', () => {

    beforeEach('login to the app', () => {
        cy.loginToApplication()
    })

    it('verify user can login successfully', () => {
        cy.get('.b-top-profile__preview').find('div').should('have.class','js-header-user-avatar')
    })
})