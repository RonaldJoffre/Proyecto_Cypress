import Pagination from '../../page_objects/pagination';
import 'cypress-real-events/support';

const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')


 Given('I open the Tienda page', () => {
    Pagination.visit();
 });
 When('I select 9 items', () =>{     
    Pagination.item9();   
 });
 Then('9 items should be displayed', ()=>{   
    cy.url().should('eq', 'https://biodog.es/tienda/?number=9')
 });

 When('I select 10 items', () =>{     
    Pagination.item10();   
 });
 Then('10 items should be displayed', ()=>{   
    cy.url().should('eq', 'https://biodog.es/tienda/?number=10')
 });

 When('I select 12 items', () =>{     
    Pagination.item12();   
 });
 Then('12 items should be displayed', ()=>{   
    cy.url().should('eq', 'https://biodog.es/tienda/?number=12')
 });

 When('I select 18 items', () =>{     
    Pagination.item18();   
 });
 Then('18 items should be displayed', ()=>{   
    cy.url().should('eq', 'https://biodog.es/tienda/?number=18')
 });

 When('I select 24 items', () =>{     
    Pagination.item24();   
 });
 Then('24 items should be displayed', ()=>{   
    cy.url().should('eq', 'https://biodog.es/tienda/?number=24')
 });






