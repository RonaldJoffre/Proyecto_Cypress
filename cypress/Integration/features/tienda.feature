Feature: Verify Tienda page

Scenario: Mark as favorite
    Given I open the login page    
     When I type a registered email and password to login
      And I select the tienda tab
      And I select a product
      And I add the product to the favorite list   
     Then the product is on the favorite list       