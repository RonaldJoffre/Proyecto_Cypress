import tienda from "../../page_objects/tienda";
import Tienda from "../../page_objects/tienda";
import Common from "../actions/common_actions";

const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

let product = "";
let elementsNumber;
let cartElements;

When("I select the tienda tab", () => {
  Tienda.clickTienda();
  cy.wait(2000);
});

When("I select a product", () => {
  cy.get(".product-info").then(($divs) => {
    numberOfElements = $divs.length;
    if (numberOfElements > 0) {
      // índice aleatorio
      const randomIndex = Math.floor(Math.random() * numberOfElements);

      // div en el índice aleatorio
      const randomDiv = $divs.eq(randomIndex + 1);

      cy.xpath('(//div[@class="product-info"])[' + randomIndex + "]/h3")
        .invoke("text")
        .then((text) => {
          product = text;
        });

      cy.xpath(
        '(//div[@class="product-info"])[' + randomIndex + "]/h3"
      ).click();
      //cy.wrap(randomDiv).click();  //seleciona el producto
    } else {
      throw new Error("No se encontraron divs con el selector especificado.");
    }
  });
});

Then("the product detail is displayed", () => {
  cy.contains("FORMATO").should("be.visible");
});

//####### Add to Favorites after selecting the product
When("I add the product to the favorite list", () => {
  Tienda.clickFavorite();
});

Then("the product is on the favorite list", () => {
  Common.visitURL("/lista-favoritos-biodog/view"); //Visita favoritos
  //Tienda.deleteFavorites();
  cy.get("table").find("td").contains(product).should("be.visible");
});

//####### Add to Favorites clicking the heart
When("I click over the heart icon of a product", () => {
  cy.get(".product-info").then(($divs) => {
    numberOfElements = $divs.length;
    if (numberOfElements > 0) {
      // índice aleatorio
      const randomIndex = Math.floor(Math.random() * numberOfElements) + 1;
      cy.log(randomIndex);
      // div en el índice aleatorio
      const randomDiv = $divs.eq(randomIndex);
      Tienda.clickOpcionesHover(randomIndex, 0);
    } else {
      throw new Error("No se encontraron divs con el selector especificado.");
    }
  });
});

When("I click on the heart icon", () => {
  Tienda.clickFavorite();
});

//#######Para add to cart
When("I click over the Vista rapida icon of a product", () => {
  cy.get(".product-info")
    .then(($divs) => {
      numberOfElements = $divs.length;
       if (numberOfElements > 0) {
      // índice aleatorio
       const randomIndex = Math.floor(Math.random() * numberOfElements) + 1;
       cy.log(randomIndex);
      // div en el índice aleatorio
      const randomDiv = $divs.eq(randomIndex);
      Tienda.clickOpcionesHover(randomIndex, 1);
    } else {
      throw new Error("No se encontraron divs con el selector especificado.");
    }
  });
});

When("I click on add to cart", () => {
  cy.xpath("//span[@class='mini-cart-number white set-cart-number']")
    .invoke("text")
    .then((text) => {
      cartElements = parseInt(text.trim(), 10);
      cy.log(`Número de productos en el carrito: ${cartElements}`);
    });
  cy.log(`Número de productos: ${cartElements}`);
  cy.contains("Añadir al carrito").click();
});

Then("the product is added to the cart", () => {
  cy.log(`Número de productos antes: ${cartElements}`);

  //cuenta y compara productos
  cy.xpath("//span[@class='mini-cart-number white set-cart-number']")
    .invoke("text")
    .then((text) => {
      const currentCartElements = parseInt(text.trim(), 10);
      cy.log(`Número de productos en el carrito actual : ${currentCartElements}`);
      //debeía haber aumentado y ser diferente
      expect(currentCartElements).not.to.equal(cartElements);
    });
});

//#######para el cart buttoin
When("I click on the cart Button and the product is on the list", () => {
  cy.get(".mini-cart-link").contains("Carrito").click();
  cy.get(".mini-cart-empty")
    .should("be.visible")
    .should("not.contain", "No hay artículos"); //contains('No hay artículos en el carro');
});

//#######deshabilitar Añadir al carrito
When("I click on Quitar Opcion Button", () => {
  cy.contains("Quitar opción")
    .should("be.visible")
    .click();
});

Then("Añadir al carrito button should be disabled", () => {
  cy.get(".single_add_to_cart_button")
    .should("have.class",
             "single_add_to_cart_button button alt disabled wc-variation-selection-needed"
     );
});
// Seleccionar la opción para ordenar por precio de menor a mayor
When("I select the sort by price ascending", () => {
  Tienda.selectOrderByPriceAscending();
  cy.wait(2000); // Espera para asegurar que el desplegable se actualice
});
When("I select the sort by price descending", () => {
  Tienda.selectOrderByPriceDescending();
});
Then('the sort dropdown should display {string}', (expectedText) => {
  cy.wait(2000); // Ajusta el tiempo de espera según sea necesario
  Tienda.verifySortDropdownText(expectedText);
});
Then('the product prices should be in ascending order', () => {
  Tienda.verifyPricesAreInAscendingOrder(); // Llama al método para verificar el orden de precios
});
Then("the product prices should be in descending order", () => {
  Tienda.verifyPricesAreInDescendingOrder();
});
