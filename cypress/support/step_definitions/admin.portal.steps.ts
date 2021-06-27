import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import {AdminLoginPage} from '../pages/admin_portal/admin.login.page';
import {AdminHomePage} from '../pages/admin_portal/admin.home.page';
import {AdminLocationPage} from '../pages/admin_portal/admin.location.page';
import {AdminIngredientPage} from '../pages/admin_portal/admin.ingredient.page';
import {AdminTagPage} from '../pages/admin_portal/admin.tag.page';
import {AdminRecipePage} from '../pages/admin_portal/admin.recipe.page';
import {AdminUnitPage} from '../pages/admin_portal/admin.unit.page';
import {AdminDietPage} from '../pages/admin_portal/admin.edit.meal.plan.page';
import {AdminExercisePage} from '../pages/admin_portal/admin.exercise.page';
import {AdminWorkoutPage} from '../pages/admin_portal/admin.workout.page';
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  fitnessPlan1,
  fitnessPlan2,
  fitnessPlan3,
  ingredient1,
  ingredient2,
  ingredient3,
  location1,
  location2,
  location3,
  recipe1,
  recipe2,
  recipe3,
  recipeWithAlternateOption,
  tag1,
  tag2,
  tag3,
  unit1,
  unit2,
  unit3,
  workout1,
  workout2,
  workout3,
  workout4,
} from '../utils/dataSet';
import {AdminFitnessLevelsPage} from '../pages/admin_portal/admin.fitness_levels.page';

const adminLoginPage = new AdminLoginPage();
const adminHomePage = new AdminHomePage();
const adminLocationPage = new AdminLocationPage();
const adminIngredientPage = new AdminIngredientPage();
const adminTagPage = new AdminTagPage();
const adminRecipePage = new AdminRecipePage();
const adminUnitPage = new AdminUnitPage();
const adminDietPage = new AdminDietPage();
const adminExercisePage = new AdminExercisePage();
const adminWorkoutPage = new AdminWorkoutPage();
const adminFitnessLevelPage = new AdminFitnessLevelsPage();

Given(/^I go to admin login page$/, function () {
  adminLoginPage.visit();
});

Then(/^I login as admin with valid credential$/, function () {
  adminLoginPage.login('admin@mailinator.com', 'password');
});

//Locations

Given(/^I clicked on the location icon$/, function () {
  adminHomePage.clickOnLocations();
});

Then(/^I am navigated to the location page$/, function () {
  adminLocationPage.verifyLocationPage();
});

Then(/^I created a new location$/, function () {
  adminLocationPage.addNewLocation(location1);
});

Then(/^I created multiple new locations$/, function () {
  adminLocationPage.addNewLocation(location2);
  adminLocationPage.addNewLocation(location3);
});

// Ingredients

When(/^I clicked on the Ingredient icon$/, function () {
  adminHomePage.clickOnIngredients();
});
Then(/^I am navigated to the Ingredient page$/, function () {
  adminIngredientPage.verifyIngredientPage();
});

And(/^I created a new Ingredient$/, function () {
  adminIngredientPage.createNewIngredient(ingredient1);
});

Then(/^I created multiple ingredients$/, function () {
  adminIngredientPage.createNewIngredient(ingredient2);
  adminIngredientPage.createNewIngredient(ingredient3);
});

// Tags

When(/^I clicked on the Tags icon$/, function () {
  adminHomePage.clickOnTags();
});
Then(/^I am navigated to the Tags page$/, function () {
  adminTagPage.verifyTagPage();
});

And(/^I created a new Tag$/, function () {
  adminTagPage.createTag(tag1);
});

Then(/^I created multiple new tags$/, function () {
  adminTagPage.createTag(tag2);
  adminTagPage.createTag(tag3);
});

// Units

When(/^I clicked on the Unit icon$/, function () {
  adminHomePage.clickOnUnits();
});
Then(/^I am navigated to the Unit page$/, function () {
  adminUnitPage.verifyUnitPage();
});

And(/^I created a new unit$/, function () {
  adminUnitPage.createUnit(unit1);
});

Then(/^I created multiple new units$/, function () {
  adminUnitPage.createUnit(unit2);
  adminUnitPage.createUnit(unit3);
});

// Recipes

When(/^I clicked on the recipe icon$/, function () {
  adminHomePage.clickOnRecipes();
});
Then(/^I am navigated to the recipe page$/, function () {
  adminRecipePage.verifyRecipePage();
});

Then(/^I created a new recipe$/, function () {
  adminRecipePage.addNewRecipe(recipe1);
});

Then(/^I created multiple recipes$/, function () {
  adminRecipePage.addNewRecipe(recipe2);
  adminRecipePage.addNewRecipe(recipe3);
});

Then(/^I created a recipe with alternative recipe$/, function () {
  adminRecipePage.addNewRecipe(recipeWithAlternateOption);
});

// Delete all created Data

And(/^I delete all the previous data$/, function () {
  cy.request('DELETE', `https://fast800-api-with-web-e2e.herokuapp.com//api/v1/e2e/clear_data`);
});

// Diets
When(/^I clicked on the diets icon$/, function () {
  adminHomePage.clickOnDiets();
});
Then(/^I am navigated to the Diets page$/, function () {
  adminDietPage.verifyDietsPage();
});

Then(/^I clicked on "([^"]*)" diet's edit button$/, function (dietName: string) {
  adminDietPage.clickOnDietEditButton(dietName);
});

Then(/^I updated week (\d+) day (\d+) meal (\d+) recipe (\d+)$/, function (
  week: number,
  day: number,
  meal: number,
  recipe: number
) {
  adminDietPage.mealPlanField(week, day, meal, recipe);
});
Then(/^I saved the meal plan$/, function () {
  adminDietPage.clickOnMealSaveButton();
});

When(/^I update the "([^"]*)" diet with default recipe$/, function (dietName: string) {
  adminDietPage.updateDefaultDietPlan(dietName);
});
Then(/^I update the week (\d+) day (\d+) meal (\d+) with recipe (\d+) of the"([^"]*)" diet $/, function (
  dietName: string,
  week: number,
  day: number,
  meal: number,
  recipe: number
) {
  adminDietPage.clickOnDietEditButton(dietName);
  adminDietPage.mealPlanField(week, day, meal, recipe);
});

Given(/^I update the breakfast of day no (\d+) of week no (\d+) with recipe id (\d+)$/, function (
  day: number,
  week: number,
  recipe: number
) {
  adminDietPage.updateBreakfast(day, week, recipe);
});
Given(/^I update the lunch of the day no (\d+) of week no (\d+) with recipe id (\d+)$/, function (
  day: number,
  week: number,
  recipe: number
) {
  adminDietPage.updateLunch(day, week, recipe);
});

Given(/^I update the dinner of the day no (\d+) of week no (\d+) with recipe id (\d+)$/, function (
  day: number,
  week: number,
  recipe: number
) {
  adminDietPage.updateDinner(day, week, recipe);
});

// Exercise

Then(/^I clicked on the Exercises icon$/, function () {
  adminHomePage.clickOnExercises();
});

Then(/^I created a new exercise$/, function () {
  adminExercisePage.createNewExercise(exercise1);
});
Given(/^I created multiple exercises$/, function () {
  adminExercisePage.createNewExercise(exercise2);
  adminExercisePage.createNewExercise(exercise3);
  adminExercisePage.createNewExercise(exercise4);
});

// Workouts
Given(/^I clicked on the Workout icon$/, function () {
  adminHomePage.clickOnWorkouts();
});
Given(/^I created a new workout$/, function () {
  adminWorkoutPage.createWorkout(workout1);
});
Given(/^I created multiple workouts$/, function () {
  adminWorkoutPage.createWorkout(workout2);
  adminWorkoutPage.createWorkout(workout3);
  adminWorkoutPage.createWorkout(workout4);
});

// Fitness Levels

Given(/^I clicked on the Fitness Levels$/, function () {
  adminHomePage.clickOnFitnessLevels();
});
Given(/^I created a new Fitness level$/, function () {
  adminFitnessLevelPage.createNewFitnessPlan(fitnessPlan1);
});

Given(/^I created multiple Fitness levels$/, function () {
  adminFitnessLevelPage.createNewFitnessPlan(fitnessPlan2);
  adminFitnessLevelPage.createNewFitnessPlan(fitnessPlan3);
});

Given(/^I modified "([^"]*)" with default level$/, function (fitnessLevel: string) {
  adminFitnessLevelPage.updateFitnessPlan(fitnessPlan1, fitnessLevel);
});
Given(/^I clicked on the edit button of "([^"]*)"$/, function (fitnessLevel: string) {
  adminFitnessLevelPage.clickOnFitnessLevelEditButton(fitnessLevel);
});
Given(/^I updated workout of week no "([^"]*)" of day no "([^"]*)" with workout id "([^"]*)"$/, function (
  day: number,
  week: number,
  workout: number
) {
  adminFitnessLevelPage.updateWorkout(day, week, workout);
});

Then(/^I clicked on the save button$/, function () {
  adminFitnessLevelPage.clickOnFitnessLevelSaveButton();
});
