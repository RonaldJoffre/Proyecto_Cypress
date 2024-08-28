import Tienda from '../../page_objects/tienda';
import Common from  '../actions/common_actions'; 

import '@cypress/xpath';

const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

let product = '';
let elementsNumber ;

When('I select the tienda tab', () => {
    Tienda.clickTienda();
});

When('I select a product', () => {
cy.get('.product-info').then($divs => {
    numberOfElements = $divs.length;
    if (numberOfElements > 0) {
        // índice aleatorio
        const randomIndex = Math.floor(Math.random() * numberOfElements)
        cy.log(randomIndex);
        // div en el índice aleatorio
        const randomDiv = $divs.eq(randomIndex + 1);
        
        cy.xpath('(//div[@class="product-info"])['+(randomIndex)+']/h3')   
        .invoke('text') 
        .then((text) => {
          product = text;          
        });      

        cy.xpath('(//div[@class="product-info"])['+(randomIndex)+']/h3').click();
        //cy.wrap(randomDiv).click();  //seleciona el producto

    } else {
        throw new Error('No se encontraron divs con el selector especificado.');
    }

 
})
});

Then('the product detail is displayed', () => {
    cy.contains('FORMATO').should('be.visible')
});

When('I add the product to the favorite list', () => {
    Tienda.clickFavorite();
});

Then('the product is on the favorite list', () => {
    Common.visitURL('/lista-favoritos-biodog/view'); //Visita favoritos
    Tienda.deleteFavorites();
    cy.get('table') // Selecciona la primera tabla
      .find('td') // Encuentra todos los <td> dentro de la tabla
      .contains(product).should("be.visible"); // Encuentra el <td> que contiene el texto 'Third Cell'
 });
    

