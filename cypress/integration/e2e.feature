Feature: End to end happy flow

  Background: App data has been reset
    Given application has been reset

  @e2ehappyflow
  Scenario: As a user, I should be able to use all the features in the app

    # Registration
    Given I go to "Login" page
    When I click button with text "Register"
    When I fill the register form
    And I click the register button


    # # # Checkout
    And I log in with valid credential on web
    And I fill the address details
    And I accept all terms and conditions
    And I select the "AUD" currency
    And I fill the card details
    And I click the place order button
    And I click button with text "Get Started"

    # # #Quiz
    And I complete the personalize quiz: first
    And I complete the personalize quiz: second
    And I complete the personalize quiz: third
    And I complete the personalize quiz: four
    And I complete the personalize quiz: five
    And I complete the personalize quiz: six

    And I click button with text "Next"
    And I click button with text "Finish"

    Then I should be in "Dashboard" page
    And I should see Week "0" current selected in the week dropdown
    And I should see 2 servings for all the meals


    #Dashboard/Home
    # Dashboard > Meal
    When I click minus button for servings in breakfast meal at dashboard
    Then I should see the meal serving value decrease to 1 for breakfast
    When I open breakfast recipe from the dashboard
    Then I should see the ingredient unit selected as metric
    When I toggle ingredient unit to imperial
    Then I should see the ingredient unit has been changed to imperial
    When I mark the recipe as done in meal popup from dashboard
    And I click the recipe favourite button in meal popup from dashboard
    And I click minus button for servings at meal popup from dashboard
    And I click the recipe close button
    Then I should be in "Dashboard" page
    And I should see servings at dashboard page remains the same
    When I click at plan your weekly meals link from the dashboard

    # # Recipe Page
    Then I should be in "Recipe" page
    And I should see meal plans for whole week
    When I click button with text "Next week"
    Then I should see meal plans for whole week
    When I click swap meal button from meal plan
    Then I should see the suggested meal plan
    When I click on swap button on a meal from the suggested meal tab
    Then I should see the meal has been swapped in the recipe page

    When I click swap meal button from meal plan
    And I click the favourite tab on swap meal popup
    Then I should see only the favourite recipes on swap meal popup
    When I click the search tab on swap meal popup
    And I search for recipe with keyword "Pie"
    Then I should see the recipes that contains the word "Pie"

    When I click on swap button on a meal from search meal tab
    Then I should see the meal has been swapped in the recipe page
    When I click the reset meal plan button
    Then I should see the default meal plan

    #shopping list
    When I click "Shopping" tab from "Recipes" page
    Then I should see the shopping list for this week
    When I click "Home" tab from "Shopping List" page
    And I increase the servings for Monday breakfast of this week by one
    When I click "Shopping" tab from "Home" page
    Then I should see the amount in shopping list has been increased


  # Dashboard > workout
    When I click "Home" tab from "Shopping List" page
    And I click on workout thumbnail on home page
    And I play the video on workout popup
    And I click favourite on workout popup
    And I mark the workout as done in workout popup
    Then I should see the congratulatory message
    When I close the workout popup
    And I click a link with text "Explore this week's exercise"
    Then I should see the workout for whole week
    And I mark the tomorrow workout as done in workout page
    Then I should see the congratulatory message
    Then I should see the tomorrow workout as done


  # Track page
    When I click "Track" tab from "Workouts" page

    # Track > Weight
    And I click "Add Entry" button in track page
    And I add weight entry
    Then I should see the latest weight has been added to the list
    When I switch units for weight on track page
    Then I should see the correct units on entire page
    When I click "Update Goal" button in track page
    And I update goal weight entry
    Then I should see my updated goal weight

    # Track > Waist
    When I click on "Waist" tab on track page
    And I click "Add Entry" button in track page
    And I add waist entry
    Then I should see the latest waist has been added to the list
    When I switch units for waist on track page
    Then I should see the correct waist units on entire page
    When I click "Update Goal" button in track page
    And I update goal waist entry
    Then I should see my updated goal waist


    # Track > HBA1c
    When I click on "HBA1c" tab on track page
    And I click "Add Entry" button in track page
    And I add HBA1c entry
    Then I should see the latest HBA1c has been added to the list
    And I switch units for HBA1c on track page
    Then I should see the correct HBA1c units on entire page

   # Track > Sleep
    When I click on "Sleep" tab on track page
    And I click "Add Entry" button in track page
    And I add Sleep entry
    Then I should see the latest sleep entry has been added to the list

    # Track > Mood
    When I click on "Mood" tab on track page
    And I click "Add Entry" button in track page
    And I add Mood entry
    Then I should see the latest mood entry has been added to the list

    # Track > Photo
    When I click on "Photo" tab on track page
    And I click "Add Entry" button in track page
    And I add photo entry
    Then I should see the latest photo entry has been added to the list

    # Explore page
    When I click "Explore" tab from "Track" page

    # Explore > recipe
    And I click "recipe" tab in explore page
    And I click show filters button on explore page

    # todo filter by tags - how can I test
    # And I click tag with text "pie"

    And I search "recipe" with keyword "Pie" in explore page
    Then I should get all the "recipe" that contains word "Pie" in the title
    When I clear the search in explore page
    And I click favourite button on "recipe"
    And I click button with text "Show Favourites"
    Then I should see the favourite "recipe" in explore page

    #Explore > workouts
    And I click "workout" tab in explore page
    And I click show filters button on explore page

    # todo filter by tags - how can I test
    # And I click tag with text "pie"

    And I click favourite button on "workout"
    And I click button with text "Show Favourites"
    Then I should see the favourite "workout" in explore page

    #Explore > mindfulness
    And I click "mindfulness" tab in explore page
    And I search "mindfulness" with keyword "PLAN" in explore page
    Then I should get all the "mindfulness" that contains word "PLAN" in the title
    When I clear the search in explore page
    And I click favourite button on "mindfulness"
    And I click button with text "Show Favourites"
    Then I should see the favourite "mindfulness" in explore page


    #Explore > learning
    And I click "learning" tab in explore page
    And I click show filters button on explore page
    # todo filter by tags - how can I test
    # And I click tag with text "pie"

    And I search "learning" with keyword "pies" in explore page
    Then I should get all the "learning" that contains word "pies" in the title
    When I clear the search in explore page
    And I click favourite button on "learning"
    And I click button with text "Show Favourites"
    Then I should see the favourite "learning" in explore page


    #Explore > success
    And I click "success" tab in explore page
    # Success page does not have any stories yet

    #Explore > article
    And I click "article" tab in explore page
    And I search "article" with keyword "pies" in explore page
    Then I should get all the "article" that contains word "pies" in the title
    When I clear the search in explore page
    And I click favourite button on "article"
    And I click button with text "Show Favourites"
    Then I should see the favourite "article" in explore page

    #Profile Page
    When I click "Profile" tab from "Explore" page





