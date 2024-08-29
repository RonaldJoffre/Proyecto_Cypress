Feature: Verify Add to Cart functionality

Scenario: Select a product and add to cart verifiying de quantity increase
    Given I open the login page    
     When I type a registered email and password to login
      And I select the tienda tab
      And I click over the Vista rapida icon of a product 
      And I click on add to cart
     Then the product is added to the cart

Scenario: Select a product and add to cart verifiying on the cart list
    Given I open the login page    
     When I type a registered email and password to login
      And I select the tienda tab
      And I click over the Vista rapida icon of a product 
      And I click on add to cart
     Then I click on the cart Button and the product is on the list     

Scenario: Verifiy Quitar Opcion Functionality
    Given I open the login page    
     When I type a registered email and password to login
      And I select the tienda tab
      And I click over the Vista rapida icon of a product 
      And I click on Quitar Opcion Button
     Then Añadir al carrito button should be disabled          