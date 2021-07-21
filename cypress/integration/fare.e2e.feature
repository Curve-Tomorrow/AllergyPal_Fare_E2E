Feature: Registration

  Background: App data has been reset
    Given I delete the previous user

  Scenario: Register a new user

    Given I launched the welcome page
    And I clicked on the Get Started button
    And I signed up with the application
    Then I signed in with the new user
    And I created a new child
    #Then I delete the previous user

