Feature: Page feature

Background: 
    Given I open the Tienda page

    Scenario: I am able to select 9 items 
        When I select 9 items 
        Then 9 items should be displayed
    
    Scenario: I am able to select 10 items 
        When I select 10 items 
        Then 10 items should be displayed

    Scenario: I am able to select 12 items 
        When I select 12 items 
        Then 12 items should be displayed

    Scenario: I am able to select 18 items 
        When I select 18 items 
        Then 18 items should be displayed

    Scenario: I am able to select 24 items 
        When I select 24 items 
        Then 24 items should be displayed