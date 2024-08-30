Feature: Comparar Productos

  Background:
    Given I open the login page    
    When I type a registered email and password to login
    And I select the tienda tab

  Scenario: Agregar el producto a compare
    When I hover over a product with index 1
    And I click on "Compare"
    Then the product should be added to the comparison list
