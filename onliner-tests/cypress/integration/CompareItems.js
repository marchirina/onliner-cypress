/// <reference types = "cypress" />
///<reference types="cypress-iframe" />

const { onCatalogPage } = require("../support/PageObjects/CatalogPage")
const { onMainPage } = require("../support/PageObjects/MainPage")
const { onNotebookPage } = require("../support/PageObjects/NotebookPage")

describe('Test login', () => {

    beforeEach('login to the app', () => {
        cy.loginToApplication()
    })

    it('Compare items ', () => {

        onMainPage.openCatalogPage()
        onCatalogPage.openNotebookPage()
        onNotebookPage.sortAppleMacbook()
        onNotebookPage.addItemsToCompare(3)
        onNotebookPage.isItemsInComparison()
    })
})
