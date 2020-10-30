export class ItemPage{
    
    addItemToTheBasket(){
       cy.get('div .product-aside__group').find('.product-aside__item--highlighted').then( offers => {
           cy.wrap(offers).find('.button_orange').click()
       })
        
    }

    isItemInTheBasket(){
        cy.get('#cart-desktop').should('be.visible').find('span').should('contain','1')
    }

    goToBasketPage(){
        cy.get('#cart-desktop').should('be.visible').click()
    }

}

export const onItemPage = new ItemPage()