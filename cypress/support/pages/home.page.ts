import BasePage from '../utils/base.page';

const BREAKFAST_MEAL_TITLE_SELECTOR = 'div.meal_title > h3';
const SWITCH_UNIT_BTN_SELECTOR = '#switch-units';
const PLUS_BTN_SELECTOR = '#plus-button';
const MINUS_BTN_SELECTOR = '#minus-button';
const CLOSE_BTN_SELECTOR = '#close-button';
const RECIPE_POPUP_FAV_BTN_SELECTOR = 'app-recipe-popup app-favourite:nth-of-type(1) button';
const WORKOUT_IMAGE_SELECTOR = 'app-workout-banner img.workout-banner__thumb';
const FAV_BTN_SELECTOR = 'app-workout-popup app-favourite button';

export type Unit = 'imperial' | 'metric';
export class HomePage extends BasePage {
  swapRecipeTitle = '';
  constructor() {
    super();
  }

  checkSelectedWeek(week: string) {
    cy.get('div.days__header select').invoke('attr', 'ng-reflect-model').should('eq', week);
  }

  checkMealServings(serving: number) {
    this.shouldContainText('div.meal__meta-item-group', `${serving} servings`);
  }

  checkBreakfastMealServing(serving: number) {
    this.shouldContainText('div.meal__meta-item-group:nth-of-type(1)', `${serving} servings`);
  }

  checkSwitchUnitBtnText(unit: Unit) {
    this.shouldHaveText(SWITCH_UNIT_BTN_SELECTOR, `Switch to ${unit} units`);
  }

  clickSwitchUnitBtn() {
    this.click(SWITCH_UNIT_BTN_SELECTOR, {force: true});
  }

  increaseServings() {
    this.click(PLUS_BTN_SELECTOR, {force: true});
  }

  decreaseServings() {
    this.click(MINUS_BTN_SELECTOR, {force: true});
  }

  clickDone() {
    this.clickBtnWithText('Mark done');
  }

  clickRecipeFavBtn() {
    this.click(RECIPE_POPUP_FAV_BTN_SELECTOR, {force: true});
  }

  clickCloseBtn() {
    this.click(CLOSE_BTN_SELECTOR);
  }

  clickMealPlanLink() {
    this.clickLinkWithText('Plan your weekly meals');
  }

  clickBreakfast() {
    cy.get(BREAKFAST_MEAL_TITLE_SELECTOR).first().click();
  }

  clickWorkoutThumbnail() {
    // fix me
    cy.wait(500);
    this.click(WORKOUT_IMAGE_SELECTOR);
  }

  clickWorkoutFavBtn() {
    this.click(FAV_BTN_SELECTOR);
  }

  closeWorkoutPopup() {
    this.click(CLOSE_BTN_SELECTOR);
  }
}
