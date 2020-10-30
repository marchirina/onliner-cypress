export class CheckoutPage{

    acceptCheckout(){
       cy.get('button').should('be.visible').contains('Перейти к способу оплаты').click({force: true}) 
       cy.get('#offline').contains('При получении').click({force: true})
       cy.get('button').contains('Перейти к подтверждению заказа').click()  
    }

    isCheckoutCompleted(){
        cy.get('button').should('contain','Отправить заказ')
    }
}

export const onCheckoutPage = new CheckoutPage()