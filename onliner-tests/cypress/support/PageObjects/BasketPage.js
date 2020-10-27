export class BasketPage{

    openCheckout(){
       cy.get('.cart-form__control').contains('Оформить заказ').click()  
    }

    deleteItem(){
        cy.go('back')
        cy.get('.cart-form__offers-part_remove').find('.cart-form__button_remove').click({force:true})
    }
}

export const onBasketPage = new BasketPage()