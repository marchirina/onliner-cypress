export class NotebookPage{

    sortAppleMacbook(){
        cy.get('#schema-filter').find('.schema-filter__fieldset').then(filter => {
            cy.wrap(filter).contains('Apple').then(producer => {
              cy.wrap(producer).find('.i-checkbox').click()
            })
            cy.wrap(filter).contains('2019').then(year => {
                cy.wrap(year).find('.i-checkbox').click()
            })
        })
    }

    addItemsToCompare(itemCount){
        let item=0
        cy.wait(3000)
        cy.get('#schema-products').find('.i-checkbox__faux').should('be.visible').then(checkboxes => {
            for(let i=0;i<itemCount;i++) {
                cy.wrap(checkboxes).eq(item).click({force: true})
                item++
            }
        }) 
    }

    isItemsInComparison(){
        cy.iframe('.modal-iframe').then( iframe => {
            cy.wrap(iframe).find('.compare-button__state_initial').then(button => {
                cy.wrap(button).find('.compare-button__sub_main').invoke('text').then(text => {
                    expect(text.trim()).to.equal('3 товара в сравнении')
                })
            })
        })
    }
}

   export const onNotebookPage = new NotebookPage()