export class Login{
    username(userName){
        cy.get('#user-name').type(userName)
    }

    password(password){
        cy.get('#password').type(password)
    }
    loginButon(){
        cy.get('[data-test="login-button"]').click()
    }
}