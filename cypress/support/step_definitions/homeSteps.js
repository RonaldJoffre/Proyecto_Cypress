import Home from '../../page_objects/home';
import Common from  '../actions/common_actions'; 
//import Home from '../../actions/';
//import { TITTLE } from '../../support/constants';

const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

Given('I open the home page', () => {
    //Home.visit1();  
    Common.visitURL('');  
});
Then('the title for Biopdog site should be displayed', () => {
    cy.title().should('eq', 'asdasd');
});

Then('the title should be {string}', (title) => {
    cy.title().should('eq', title)
});