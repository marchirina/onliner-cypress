export class CatalogPage{
 
 openNotebookPage(){
     cy.get('.catalog-navigation-classifier__item ').contains('Компьютеры').click()
     cy.get('#widget-3102').click()
 }

}
export const onCatalogPage = new CatalogPage()