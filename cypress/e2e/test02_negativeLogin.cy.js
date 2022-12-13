/*
Test Case 1: Login User with correct email and password
1. Launch browser
2. Navigate to url 'https://www.saucedemo.com/'
3. Verify that home page is visible successfully
4. Enter incorrect username and password
5. Click 'login' button
6. Verify error 'Epic sadface: Username and password do not match any user in this service' is visible

*/
import {BaseUrl} from '../pageobject/baseUrl.cy'
import { Login } from '../pageobject/Login.cy'
const url =new BaseUrl ()
const login = new Login()

describe('login olma',()=>{
    it('TC001 pozitif login',()=>{
        url.navigate('https://www.saucedemo.com/')
        url.title('Swag Labs')
        login.username('user')
        login.password('123456')
        login.loginButon()
        cy.get('[data-test="error"]').should('be.visible')
       
    }) 
 
})