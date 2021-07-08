Feature: Registration


#  Background: App data has been reset
#
#    Given I go to admin login page
#    When I login as admin with valid credential

  Scenario: Clear previous data from the Admin portal

    Given I go to admin login page

    # Locations

#  Scenario: Create multiple new locations from the Admin portal
#
#    And I clicked on the location icon
#    Then I am navigated to the location page
#    And I created a new location
#    And I created multiple new locations
#
#    # Ingredients
#
#  Scenario: Create multiple new Ingredients from the Admin portal
#
#    When I clicked on the Ingredient icon
#    Then I am navigated to the Ingredient page
#    And I created a new Ingredient
#    And I created multiple ingredients
#
#    # Unit
#
#  Scenario: Create multiple new Units from the Admin portal
#
#    When I clicked on the Unit icon
#    Then I am navigated to the Unit page
#    And I created a new unit
#    And I created multiple new units
#
#    # Tag
#
#  Scenario: Create multiple new Tags from the Admin portal
#
#    When I clicked on the Tags icon
#    Then I am navigated to the Tags page
#    And I created a new Tag
#    And I created multiple new tags
#
#    # Recipe
#
#  Scenario: Create multiple new Recipes from the Admin portal
#
#    When I clicked on the recipe icon
#    Then I am navigated to the recipe page
#    And I created a new recipe
#    And I created multiple recipes
#    And I created a recipe with alternative recipe
#
#    # Diets
#
#  Scenario: Create multiple new Diets from the Admin portal and modify one of them
#
#    When I clicked on the diets icon
#    Then I am navigated to the Diets page
#    And I update the "800 veg" diet with default recipe
#    And I saved the meal plan
#    And I clicked on "5:2 veg" diet's edit button
#    And I update the breakfast of day no 4 of week no 0 with recipe id 3
#    And I update the lunch of the day no 4 of week no 0 with recipe id 2
#    And I update the dinner of the day no 4 of week no 0 with recipe id 1
#    Then I saved the meal plan
#
#
#
#
#
#
#
