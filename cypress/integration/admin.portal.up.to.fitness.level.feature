Feature: Admin side portal


  Background: App data has been reset

    Given I go to admin login page
    When I login as admin with valid credential

  Scenario: Clear previous data from the Admin portal

    And I delete all the previous data

  # Exercise

  Scenario: Create multiple new exercises from the Admin portal

    And I clicked on the Exercises icon
    And I created a new exercise
    And I created multiple exercises

   # Workout

  Scenario: Create multiple new workouts from the Admin portal

    And I clicked on the Workout icon
    And I created a new workout
    And I created multiple workouts

  # Fitness Levels

  Scenario: Create multiple new fitness levels from the Admin portal and modify one of them

    And I clicked on the Fitness Levels
    And I created a new Fitness level
    And I created multiple Fitness levels
    And I modified "Fitness Name 2" with default level
    And I clicked on the edit button of "Fitness Name 3"
    And I updated workout of week no "0" of day no "1" with workout id "4"
    And I updated workout of week no "1" of day no "2" with workout id "3"
    And I updated workout of week no "2" of day no "3" with workout id "2"
    Then I clicked on the save button








