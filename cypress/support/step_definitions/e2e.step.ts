import {Then, When} from 'cypress-cucumber-preprocessor/steps';
import {RecipePage} from '../pages/recipe.page';
import {
  HBA1cModel,
  MoodModel,
  SleepModel,
  TrackTab,
  WaistModel,
  WebAppTrackPage,
  WeightModel,
} from '../pages/track.page';
import {ExploreTab, WebAppExplorePage} from '../pages/explore.page';

import {HomePage} from '../pages/home.page';
import {Register, RegistrationPage} from '../pages/registration.page';
import {Address, Card, CheckoutPage, Currency} from '../pages/checkout.page';
import {QuizModel1, QuizOnePage} from '../pages/quiz/quiz-1.page';
import {QuizModel2, QuizTwoPage} from '../pages/quiz/quiz-2.page ';
import {QuizModel3, QuizThreePage} from '../pages/quiz/quiz-3.page';
import {QuizFourPage, QuizModel4} from '../pages/quiz/quiz-4.page';
import {QuizFivePage, QuizModel5} from '../pages/quiz/quiz-5.page';
import {QuizModel6, QuizSixPage} from '../pages/quiz/quiz-6.page';
import {WorkoutPage} from '../pages/workout.page';
import {LoginPage} from '../pages/login.page';

const loginPage = new LoginPage();
const recipePage = new RecipePage();
const registrationPage = new RegistrationPage();
const checkoutPage = new CheckoutPage();
const workoutPage = new WorkoutPage();
const quiz1 = new QuizOnePage();
const quiz2 = new QuizTwoPage();
const quiz3 = new QuizThreePage();
const quiz4 = new QuizFourPage();
const quiz5 = new QuizFivePage();
const quiz6 = new QuizSixPage();
const homePage = new HomePage();
const webAppTrackPage = new WebAppTrackPage();
const explorePage = new WebAppExplorePage();

export const EMAIL = 'member@mail.com';
export const PASSWORD = 'Abcd#1234';

When('I fill the register form', () => {
  const registerModel: Register = {
    first_name: 'member-first',
    last_name: 'member-last',
    email: EMAIL,
    password: PASSWORD,
    username: 'member_mail',
  };

  registrationPage.fillForm(registerModel);
});

When(/^I click the register button$/, () => {
  registrationPage.register();
});

When(/^I log in with valid credential on web$/, function () {
  loginPage.login(EMAIL, PASSWORD);
});

When(/^I fill the address details$/, () => {
  const address: Address = {
    country: 'Australia',
    street: '46 Scotia Street',
    town_city: 'Moonee Ponds',
    state_county: 'VIC',
    postcode_zip: '3039',
  };
  checkoutPage.fillAddressForm(address);
});

When(/^I accept all terms and conditions$/, () => {
  checkoutPage.acceptAllTermsAndConditions();
});

When('I select the {string} currency', (currency: Currency) => {
  checkoutPage.selectCurrency(currency);
});

When(/^I fill the card details$/, () => {
  const card: Card = {
    number: '2223000048400011',
    expiry: '04/2025',
    cvv: '555',
  };
  checkoutPage.fillCardDetails(card);
});

When(/^I click the place order button$/, () => {
  checkoutPage.placeOrder();
});

When(/^I complete the personalize quiz: first$/, () => {
  const quizModel1: QuizModel1 = {
    age: '32',
    gender: 'Male',
    ethnicity: 'Asian',
    timezone: 'Sydney',
  };
  quiz1.completeQuiz(quizModel1);
});

When(/^I complete the personalize quiz: second$/, () => {
  const quizModel2: QuizModel2 = {
    height_unit: 'feet and inches',
    height_ft_value: '5',
    height_in_value: '9',
    weight_unit: 'kilograms',
    weight_value: '80',
    waist_unit: 'inches',
    waist_value: '33',
  };
  quiz2.completeQuiz(quizModel2);
});

When(/^I complete the personalize quiz: third$/, () => {
  const quizModel3: QuizModel3 = {
    diabetes: 'Nothing',
    high_bp: 'No',
    family_diabetes: 'No',
  };
  quiz3.completeQuiz(quizModel3);
});

When(/^I complete the personalize quiz: four$/, () => {
  const quizModel4: QuizModel4 = {
    weight_unit: 'kilograms',
    weight_goal_value: '70',
    waist_unit: 'inches',
    waist_goal_value: '30',
    ambition: 'Moderately ambitious',
  };
  quiz4.completeQuiz(quizModel4);
});

When(/^I complete the personalize quiz: five$/, () => {
  const quizModel5: QuizModel5 = {
    vegetarian: 'No',
    servings: 2,
    ingredient: 'Australia',
    unit: 'Metric',
  };
  quiz5.completeQuiz(quizModel5);
});

When(/^I complete the personalize quiz: six$/, () => {
  const quizModel6: QuizModel6 = {
    job: 'Mostly sitting down',
    commute: 'Drive',
    recreational_sport: 3,
    walking: 4,
    cv: 0,
    resistance: 0,
    gym: 0,
  };
  quiz6.completeQuiz(quizModel6);
});

Then('I should see Week {string} current selected in the week dropdown', (week: string) => {
  homePage.checkSelectedWeek(week);
});

Then(/^I should see 2 servings for all the meals$/, () => {
  // the serving depends on the quiz
  homePage.checkMealServings(2);
});

When(/^I click minus button for servings in breakfast meal at dashboard$/, () => {
  homePage.decreaseServings();
});

Then(/^I should see the meal serving value decrease to 1 for breakfast$/, () => {
  homePage.checkBreakfastMealServing(1);
  // reset
  homePage.increaseServings();
});

When(/^I open breakfast recipe from the dashboard$/, () => {
  homePage.clickBreakfast();
});

Then(/^I should see the ingredient unit selected as metric$/, () => {
  // this unit depends on the quiz
  homePage.checkSwitchUnitBtnText('imperial');
});

When(/^I toggle ingredient unit to imperial$/, () => {
  homePage.clickSwitchUnitBtn();
});

Then(/^I should see the ingredient unit has been changed to imperial$/, () => {
  homePage.checkSwitchUnitBtnText('metric');
});

When(/^I mark the recipe as done in meal popup from dashboard$/, () => {
  homePage.clickDone();
});

When(/^I click the recipe favourite button in meal popup from dashboard$/, () => {
  homePage.clickRecipeFavBtn();
});

When(/^I click minus button for servings at meal popup from dashboard$/, () => {
  homePage.decreaseServings();
});

When(/^I click the recipe close button$/, () => {
  homePage.clickCloseBtn();
});

Then(/^I should see servings at dashboard page remains the same$/, () => {
  homePage.checkBreakfastMealServing(2);
});

When(/^I click at plan your weekly meals link from the dashboard$/, () => {
  homePage.clickMealPlanLink();
});

Then(/^I should see meal plans for whole week$/, () => {
  recipePage.checkMealPlans();
});

Then(/^I should see meal plans for whole week$/, () => {
  recipePage.checkMealPlans();
});

When(/^I click swap meal button from meal plan$/, () => {
  recipePage.clickMealSwapBtn();
});

Then(/^I should see the suggested meal plan$/, () => {
  recipePage.checkSwapMealPopupTab('suggested');
});

When(/^I click on swap button on a meal from the suggested meal tab$/, () => {
  recipePage.clickSwapRecipeBtn();
});

Then(/^I should see the meal has been swapped in the recipe page$/, () => {
  recipePage.checkSwappedMeal();
});

When(/^I click the favourite tab on swap meal popup$/, () => {
  recipePage.clickSwapMealPopupTab('favourites');
});

Then(/^I should see only the favourite recipes on swap meal popup$/, () => {});
When(/^I click the search tab on swap meal popup$/, () => {
  recipePage.clickSwapMealPopupTab('search');
});

When('I search for recipe with keyword {string}', (searchText: string) => {
  recipePage.searchRecipe(searchText);
});

Then('I should see the recipes that contains the word {string}', (searchText: string) => {
  recipePage.checkSearchResultContains(searchText);
});

When(/^I click on swap button on a meal from search meal tab$/, () => {
  recipePage.clickSwapRecipeBtn();
});

Then(/^I should see the meal has been swapped in the recipe page$/, () => {
  recipePage.checkSwappedMeal();
});

When(/^I click the reset meal plan button$/, () => {
  recipePage.resetMealPlan();
});

Then(/^I should see the default meal plan$/, () => {
  recipePage.checkDefaultBreakfast();
});

// shopping list
Then(/^I should see the shopping list for this week$/, () => {
  // how to check correct shopping list ?
});

When(/^I increase the servings for Monday breakfast of this week by one$/, () => {
  homePage.increaseServings();
});

Then(/^I should see the amount in shopping list has been increased$/, () => {});
When(/^I click on workout thumbnail on home page$/, () => {
  homePage.clickWorkoutThumbnail();
});

When(/^I click favourite on workout popup$/, () => {
  homePage.clickWorkoutFavBtn();
});

Then(/^I close the workout popup$/, () => {
  homePage.closeWorkoutPopup();
});

Then(/^I should see the workout for whole week$/, () => {
  workoutPage.checkWorkoutForWeek();
});

When(/^I click on workout thumbnail for Monday$/, () => {
  workoutPage.clickFirstWorkoutThumbnail();
});

When(/^I play the video on workout popup$/, () => {});
When(/^I mark the workout as done in workout popup$/, () => {
  workoutPage.clickMarkDoneBtn();
});

Then(/^I should see the congratulatory message$/, () => {
  workoutPage.checkCongratulatoryMessage();
});

When(/^I mark the tomorrow workout as done in workout page$/, () => {
  workoutPage.markTomorrowWorkoutAsDone();
});

When(/^I should see the tomorrow workout as done$/, () => {
  workoutPage.checkTomorrowWorkoutAsDone();
});

When('I click {string} button in track page', (btnText: string) => {
  workoutPage.clickBtnWithText(btnText);
});

When('I add weight entry', () => {
  const weightModel: WeightModel = {
    unit: 'kg',
    value: 72,
  };
  webAppTrackPage.addWeightEntry(weightModel, 'Add');
});

Then(/^I should see the latest weight has been added to the list$/, () => {
  webAppTrackPage.checkLatestValue('72');
});

When(/^I switch units for weight on track page$/, () => {
  webAppTrackPage.switchUnit('lbs');
});

Then(/^I should see the correct units on entire page$/, () => {
  webAppTrackPage.checkCurrentUnit('lbs');
});

When('I update goal weight entry', () => {
  const weightModel: WeightModel = {
    unit: 'stone',
    weight_stone: 9,
    weight_lbs: 10,
  };
  webAppTrackPage.addWeightEntry(weightModel, 'Update');
});

Then(/^I should see my updated goal weight$/, () => {
  // todo 61.69kg should be 62kg, bug
  webAppTrackPage.checkGoalWeight('61.69kg');
});

When('I click on {string} tab on track page', (tab: TrackTab) => {
  webAppTrackPage.clickSubTab(tab);
});

When('I add waist entry', () => {
  const waistModel: WaistModel = {
    unit: 'cm',
    value: 82,
  };
  webAppTrackPage.addWaistEntry(waistModel);
});

Then(/^I should see the latest waist has been added to the list$/, () => {
  webAppTrackPage.checkLatestValue('82');
});

When(/^I switch units for waist on track page$/, () => {
  webAppTrackPage.switchUnit('in');
});

Then(/^I should see the correct waist units on entire page$/, () => {
  webAppTrackPage.checkCurrentUnit('in');
});

When('I update goal waist entry', () => {
  const waistModel: WaistModel = {
    unit: 'in',
    value: 31,
  };
  webAppTrackPage.addWaistEntry(waistModel, 'Update');
});

Then(/^I should see my updated goal waist$/, () => {
  webAppTrackPage.checkGoalWaist('78.74cm');
});

When('I add HBA1c entry', () => {
  const hba1cModel: HBA1cModel = {
    unit: '%',
    value: 82,
  };
  webAppTrackPage.addHAB1cEntry(hba1cModel);
});

Then(/^I should see the latest HBA1c has been added to the list$/, () => {
  webAppTrackPage.checkLatestValueInTable('82');
});

When(/^I switch units for HBA1c on track page$/, () => {
  webAppTrackPage.switchUnit('mmol/mol');
});

Then(/^I should see the correct HBA1c units on entire page$/, () => {
  webAppTrackPage.checkCurrentUnitInTable('mmol/mol');
});

When('I add Sleep entry', () => {
  const sleepModel: SleepModel = {
    time: 15,
    quality: 3,
  };
  webAppTrackPage.addSleepEntry(sleepModel);
});
Then(/^I should see the latest sleep entry has been added to the list$/, () => {
  webAppTrackPage.checkLatestValueInTable('15 - 3');
});

When('I add Mood entry', () => {
  const moodModel: MoodModel = {
    quality: 5,
  };
  webAppTrackPage.addMoodEntry(moodModel);
});
Then(/^I should see the latest mood entry has been added to the list$/, () => {
  webAppTrackPage.checkLatestValueInTable('5');
});

When('I click {string} tab in explore page', (subTab: ExploreTab) => {
  explorePage.clickSubTab(subTab);
});

When('I click show filters button on explore page', () => {
  explorePage.clickShowFiltersBtn();
});

When('I click tag with text {string}', (tagText: string) => {
  explorePage.clickTagWithText(tagText);
});

When('I search {string} with keyword {string} in explore page', (tab: string, searchText: string) => {
  explorePage.searchBy(searchText);
});

Then(
  'I should get all the {string} that contains word {string} in the title',
  (subTab: ExploreTab, searchText: string) => {
    explorePage.checkSearchResult(subTab, searchText);
  }
);

When('I clear the search in explore page', () => {
  explorePage.clearSearchResult();
});

When('I click favourite button on {string}', (subTab: ExploreTab) => {
  explorePage.clickFavBtn(subTab);
});

Then('I should see the favourite {string} in explore page', (subTab: ExploreTab) => {
  explorePage.checkFavResult(subTab);
});

When('I add photo entry', () => {
  webAppTrackPage.addPhotoEntry('profile.jpg');
});

Then('I should see the latest photo entry has been added to the list', () => {
  webAppTrackPage.checkLength(1);
});
