//import '@cypress/xpath';

const TIENDATAB =  '#nav-menu-item-1300 > .menu-link';
const FAVORITE =  "//a[contains(text(),'Añadir a la lista')]";
const FAVERORITE_LIST = "//a[contains(text(),'Ver lista de favoritos')]";
const PRODUCTS_REMOVE = '//td[@class="product-remove"]';
const PRODUCTS =  '(//div[@class="product-thumb"])';
const ORDER_BY_DROPDOWN = '.woocommerce-ordering .orderby'; 

const COMPARE_BUTTON = "//a[contains(text(),'Compare')]";






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
    // Hacer Hover sobre el producto y hacer clic en "Compare"
    clickCompare(randomIndex) {
      cy.xpath(PRODUCTS + '[' + randomIndex + ']') // Selecciona el producto
      .realHover() // Hace hover sobre el producto
      .wait(3000) // Espera para que el botón "Compare" sea visible
      .xpath('.//a[contains(text(),"Compare")]') // Usa XPath relativo para encontrar el botón "Compare" dentro del producto
      .should('be.visible') // Verifica que el botón "Compare" es visible
      .click(); // Hace clic en el botón "Compare"
  }
  
    
    
      
    }
    //Click en ver favoritos
    favoriteList ()
    {
      cy.xpath(FAVERORITE_LIST)
      .first() // Toma el primer elemento de la lista de resultados
      .click();
    }

    //PAra hacer Hover sobre producto
    clickOpcionesHover(randomIndex, index)
    {
      cy.xpath(PRODUCTS +'['+(randomIndex)+']')              
      .realHover()
      .wait(2000)                
      .then(()=> {                    
          cy.xpath(PRODUCTS+'['+(randomIndex)+']')                      
            .find('li')
            .should("be.visible")
            .then($listItems => {
              if (index === 0) {
                cy.wrap($listItems.first()).click();
              }else {
                cy.wrap($listItems.eq(index)).click();
              }                 
            })
            
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

    //Obtine el número de productos
    cartNumberOfProducts()
    {
      cy.xpath("//span[@class='mini-cart-number white set-cart-number']")   
        .invoke('text') 
        .then((text) => {
          const quantity = parseInt(text.trim(), 10);
          Cypress.env('quantityElements', quantity);
          //cy.log(`Número de productos en el carrito: ${productos}`);
          //expect(productos).to.be.a('number'); // Ejemplo de aserción
          //return productos;
        });  
    }
     
    // Selecciona el ordenamiento por precio de menor a mayor
    selectOrderByPriceAscending() 
    {
    cy.get('.orderby').select('price'); 
    }
    // Selecciona el ordenamiento por precio de menor a mayor
    selectOrderByPriceAscending() 
    {
    cy.get('.orderby').select('price'); 
    }
    // Selecciona el ordenamiento por precio de mayor a menor
    selectOrderByPriceDescending() {
    cy.get(ORDER_BY_DROPDOWN).select('price-desc'); // Ajusta el valor si es necesario
      }
    // Verifica el texto del desplegable de ordenamiento
    verifySortDropdownText(expectedText) {
      cy.get(ORDER_BY_DROPDOWN) // Selecciona el dropdown
        .find('option:selected') // Encuentra la opción seleccionada
        .invoke('text') // Obtiene el texto de la opción seleccionada
        .then((text) => {
          cy.log(`Texto del dropdown: '${text}'`); // Log para depuración
          expect(text.trim()).to.equal(expectedText); // Compara el texto esperado con el texto obtenido
        });
    }
    // Obtiene todos los precios de los productos y verifica que están ordenados de menor a mayor
    verifyPricesAreInAscendingOrder() 
    {
      cy.get('.product-price') // Selecciona los elementos que contienen los precios
          .then($prices => {
              // Extrae el texto de cada precio y lo convierte a un array de números
              const pricesArray = $prices.toArray().map(priceElement => {
                  const text = Cypress.$(priceElement).text().trim();
                  // Extrae el número del texto (omite "IVA incluido" y otros textos)
                  const priceNumber = parseFloat(text.replace(/[^\d,]/g, '').replace(',', '.'));
                  return priceNumber;
              });

              // Verifica que el array de precios esté ordenado de menor a mayor
              const isSorted = pricesArray.every((price, index) => {
                  return index === 0 || price >= pricesArray[index - 1];
              });

              expect(isSorted).to.be.true; // La aserción final
          });
      }
// Obtiene todos los precios de los productos y verifica que están ordenados de mayor a menor
verifyPricesAreInDescendingOrder() {
  cy.get('.product-price') // Selecciona los elementos que contienen los precios
    .then($prices => {
      // Extrae el texto de cada precio y lo convierte a un array de números
      const pricesArray = $prices.toArray().map(priceElement => {
        const text = Cypress.$(priceElement).text().trim();
        // Extrae el número del texto (omite "IVA incluido" y otros textos)
        const priceNumber = parseFloat(text.replace(/[^\d,]/g, '').replace(',', '.'));
        return priceNumber;
      });

      // Log para depuración
      cy.log(`Array de precios: ${JSON.stringify(pricesArray)}`);

      // Verifica que el array de precios esté ordenado de mayor a menor
      const isSorted = pricesArray.every((price, index) => {
        return index === 0 || price <= pricesArray[index - 1];
      });

      // Registra el estado del array si no está ordenado correctamente
      if (!isSorted) {
        cy.log(`Error: Los precios no están ordenados de mayor a menor. Array de precios: ${JSON.stringify(pricesArray)}`);
      }

      expect(isSorted).to.be.true; // La aserción final
    });
}



    
    }

  export default new Tienda();
  
  
  
