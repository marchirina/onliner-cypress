/// <reference types = "cypress" />

describe('Test log in', () => {

    beforeEach('login to the app', () => {
        cy.loginToApplication()
    })

    it('verify user can log in successfully', () => {
        cy.get('.b-top-profile__preview').find('div').should('have.class','js-header-user-avatar')
    })
})