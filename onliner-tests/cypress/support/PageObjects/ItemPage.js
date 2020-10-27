export class ItemPage{
    
    addItemToTheBasket(){
       cy.get('div .product-aside__group').find('.product-aside__item--highlighted').then( offers => {
           cy.wrap(offers).find('.button_orange').click()
       })
        
    }

    isItemInTheBasket(){
        cy.get('#cart-desktop').find('span').should('contain','1')
    }

    goToBasketPage(){
        cy.wait(2000)
        cy.get('#cart-desktop').click()
    }

}

export const onItemPage = new ItemPage()