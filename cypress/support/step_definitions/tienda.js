import Tienda from '../../page_objects/tienda';
const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

When('I select the tienda tab', () => {
    //cy.get('fhfghfgh').click()
    Tienda.clickTienda();
});

When('I select a product', () => {
cy.get('.product-info').then($divs => {
    numberOfElements = $divs.length;
    if (numberOfElements > 0) {
        // índice aleatorio
        const randomIndex = Math.floor(Math.random() * numberOfElements)
        // div en el índice aleatorio
        const randomDiv = $divs.eq(randomIndex);
      cy.wrap(randomDiv).click()

    } else {
        throw new Error('No se encontraron divs con el selector especificado.');
    }
})
});

Then('the product detail is displayed', () => {
    cy.contains('FORMATO').should('be.visible')
});