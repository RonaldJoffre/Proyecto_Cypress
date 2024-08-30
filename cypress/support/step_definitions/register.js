const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

Given('I open the register page', () => {
    cy.visit('/mi-cuenta');
 });

Then('I see the field email', () => {  

    cy.get('body').then(($body) => {
        if ($body.find('#reg_email').length > 0) {
          cy.log('The field exists.');
        } else {
          cy.log('the field does not exist.');
        }
      });
 
    cy.get('#reg_email').type("hola");
    
    
   
});