export class MainPage{
    
    findItem(item){
        cy.wait(2000)
        cy.get('.fast-search__input').type(' ')
        cy.iframe('.modal-iframe').then( iframe => {
           cy.wrap(iframe).find('.search__input').type(item)
           cy.wrap(iframe).find('.product__title').contains(item).click()
        })
        
    }

}

export const onMainPage = new MainPage()