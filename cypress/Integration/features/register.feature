Feature: Verify register

Scenario: register user
    Given I open the login page
     When I type an email
      And I type the password
      And I click on Register button
     Then the user name should be displayed