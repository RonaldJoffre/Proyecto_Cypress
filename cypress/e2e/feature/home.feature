Feature: Verify Home page

Scenario: Load home page correctly
    Given I open the home page 1
    Then the title should be "Mi cuenta - Biodog"

Scenario: Login user
    Given I open the home page    
     When I type a registered email to login
      And I type the login password
      And I click on Acceder button
     Then the user name should be displayed

