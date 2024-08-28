import '@cypress/xpath';

const TIENDATAB =  '#nav-menu-item-1300 > .menu-link';
const FAVORITE =  "//a[contains(text(),'Añadir a la lista')]";
const PRODUCTS_REMOVE = '//td[@class="product-remove"]';

class Tienda{
    //Click Tienda Tab
    clickTienda(){
      cy.get(TIENDATAB).click()
    }

    //Click on the  "Añadir a la lista de favoritos" button
    clickFavorite(){
      cy.xpath(FAVORITE)      
      .then($element => {
        // Verifica si el elemento existe
        if ($element.length > 0 && $element.is(':visible')) {
          // Si el elemento existe, verifica si es visible
          cy.wrap($element).click();          
          cy.log('El elemento "Añadir a la lista" es visible.');
        } else {
            cy.log('El producto ya está en la lista');
        }
      });
      
    }

    // Borra primer elemto de favoritos par pasar el bug 
    deleteFavorites()
    {
      /*cy.xpath(PRODUCTS_REMOVE)        //elimna un elemtno por bug
      .each((element, index, list) => {
        // `element` es el elemento actual en el bucle
        // `index` es el índice del elemento en la lista
        // `list` es la lista completa de elementos
        cy.wrap(element) // Envolvemos el elemento en un objeto Cypress
          .click(); // Hacemos clic en el elemento
        cy.log(`Clicked element ${index + 1} of ${list.length}`);
      });    */
      
      cy.xpath(PRODUCTS_REMOVE)
      .first() // Toma el primer elemento de la lista de resultados
      .should('be.visible') // Verifica que el elemento es visible
      .click();
    } 
  }
  
  export default new Tienda();
  
  
  
