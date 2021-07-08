Feature: Registration

  Scenario: Register a new user

    Given I launched the welcome page
    And I clicked on the Get Started button
    And I signed up with the application
    Then I signed in with the new user

