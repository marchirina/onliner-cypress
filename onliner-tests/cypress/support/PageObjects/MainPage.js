export class MainPage{
    
    findItem(item){
        cy.get('.fast-search__input').should('be.visible').type(' ')
        cy.iframe('.modal-iframe').then( iframe => {
           cy.wrap(iframe).find('.search__input').type(item)
           cy.wrap(iframe).find('.product__title').contains(item).click()
        })
        
    }

    openCatalogPage(){
        cy.get('.b-top-menu').should('be.visible').find('span').contains('Каталог').click()
    }

}

export const onMainPage = new MainPage()