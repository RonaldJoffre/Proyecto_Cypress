Feature: Ordenar productos por precio de menor a mayor y de mayor a menor

  Background:
    Given I open the login page    
    When I type a registered email and password to login
    And I select the tienda tab

  Scenario: Seleccionar ordenamiento por precio de menor a mayor
    When I select the sort by price ascending
    Then the sort dropdown should display "Ordenados por precio (de menor mayor)"
    And the product prices should be in ascending order

  Scenario: Seleccionar ordenamiento por precio de mayor a menor
    When I select the sort by price descending
    Then the sort dropdown should display "Ordenados por precio (de mayor a menor )"
    And the product prices should be in descending order
