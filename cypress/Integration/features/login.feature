Feature: Verify Login page

Scenario: Login user
    Given I open the login page    
     When I type a registered email and password to login      
     Then the user name should be displayed