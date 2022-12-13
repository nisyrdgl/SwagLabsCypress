export class BaseUrl{
    navigate(url){
        cy.visit(url)
    }
    title(text){
        cy.title().should('eq',text)
    }
}