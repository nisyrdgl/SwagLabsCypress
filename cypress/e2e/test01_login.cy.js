/*
Test Case 1: Login User with correct email and password
1. Launch browser
2. Navigate to url 'https://www.saucedemo.com/'
3. Verify that home page is visible successfully
4. Enter correct email address and password
5. Click 'login' button
6. verifies   the user has logged in

*/
import {BaseUrl} from '../pageobject/baseUrl.cy'
import { Login } from '../pageobject/Login.cy'
const url =new BaseUrl ()
const login = new Login()

describe('login olma',()=>{
    it('TC001 pozitif login',()=>{
        url.navigate('https://www.saucedemo.com/')
        url.title('Swag Labs')
        login.username('standard_user')
        login.password('secret_sauce')
        login.loginButon()
        cy.get('.title').should('be.visible')
       
    }) 
})