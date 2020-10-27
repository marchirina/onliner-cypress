/// <reference types = "cypress" />
///<reference types="cypress-iframe" />

const { onBasketPage } = require("../support/PageObjects/BasketPage")
const { onCheckoutPage } = require("../support/PageObjects/CheckoutPage")
const { onItemPage } = require("../support/PageObjects/ItemPage")
const { onMainPage } = require("../support/PageObjects/MainPage")

describe('Buy item from the basket', () => {

    beforeEach('login to the app', () => {
        cy.loginToApplication()
    })

    it('verify user can add item successfully', () => {
        onMainPage.findItem('Ноутбук Apple MacBook Air 13')
        onItemPage.addItemToTheBasket()
        onItemPage.isItemInTheBasket()
    })

    it('verify user can buy item successfully',() => {
        onItemPage.goToBasketPage()
        onBasketPage.openCheckout()
        onCheckoutPage.acceptCheckout()
        onCheckoutPage.isCheckoutCompleted()
    })

    after('deleteItemFromBasket', () => {
        onBasketPage.deleteItem()
    })
})