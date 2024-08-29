Feature: Verify FAvorite Functionality

Scenario: Mark as favorite after product selectin
    Given I open the login page    
     When I type a registered email and password to login
      And I select the tienda tab
      And I select a product
      And I add the product to the favorite list   
     Then the product is on the favorite list 
     
Scenario: Mark as favorite clicking the heart from a product
    Given I open the login page    
     When I type a registered email and password to login
      And I select the tienda tab
      And I click over the heart icon of a product 
     Then the product is on the favorite list            