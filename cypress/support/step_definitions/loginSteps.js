import LoginPage from '../../page_objects/loginPage';
import Common from  '../actions/common_actions'; 

const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

function getRandomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz' 
    const randomIndex = Math.floor(Math.random() * letters.length)
    return letters[randomIndex]
}


When('I type an email', () => {    
    const firstLetter = getRandomLetter()
    const secondLetter = getRandomLetter()
    userName = 'user_' + firstLetter + secondLetter
    userPassword = userName +'.123' 
    email = userName + '@test.com'     
    cy.get('#reg_email').type(email)
    console.log(email)
});

When('I type the password', () => {
    cy.get('#reg_password').type(userPassword);   
});
When('I click on Register button', () => {
    cy.get('#customer_login > div.u-column2.col-2 > form > p.woocommerce-FormRow.form-row > button').click()
});
Then('the user name should be displayed', () => {
    cy.contains("test_email1322").should('be.visible')
});



//------------- seleccionar un producto
Given('I am logged into the page', () => {
    /*Common.visitURL('/mi-cuenta')
    cy.get('#username').type(email)
    cy.get('#password').type(userPassword)
    cy.get('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button').click()*/
    Common.loginIntoghPage();
});

  

// Oultline plano
When('I type {string} email', (email) => {    
    cy.get('#reg_email').type(email)
});

When('I type the password {string}', (password) => {
    cy.get('#reg_password').type(password);   
});

Then('the displayed user name from the {string} should be visible', (email) => {
    const parts = email.split('@')
    username = parts[0];
    cy.contains(username).should('be.visible')
});


