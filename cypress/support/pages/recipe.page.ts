import {curry} from 'cypress/types/lodash';
import BasePage from '../utils/base.page';

export type SwapMealTabType = 'suggested' | 'favourites' | 'search';
export class RecipePage extends BasePage {
  swapRecipeTitle = '';
  originalRecipeTitle = 'Gabi new recipe very exciting much loved with a very big character limit';

  constructor() {
    super();
  }

  getFirstDayMeals() {
    return cy.get('#recipesList app-meals').first();
  }

  getFirstDayBreakfast() {
    return cy.get('#recipesList app-meals app-meal').first();
  }
  checkMealPlans() {
    // check meal plans present for 7 days
    cy.get('#recipesList app-meals').should('have.length', 7);
    // each app-meal should have breakfast, lunch and dinner
    this.getFirstDayMeals().within(($elm) => {
      cy.wrap($elm).get('app-meal').should('have.length', 3);
    });
  }
  clickMealSwapBtn() {
    this.getFirstDayBreakfast().within(($elm) => {
      cy.wrap($elm).get('#toggle-open-button').click();
      this.waitForElementToAppear('div.dropdown-menu_opened');
      cy.wrap($elm).get('#toggle-button').click();
    });
  }

  checkSwapMealPopup() {
    this.waitForElementToNotAppear('app-meal-popup');
  }

  checkSwapMealPopupTab(tab: SwapMealTabType) {
    cy.get(`#${tab}-segment`).should('have.class', 'active');
  }

  clickSwapMealPopupTab(tab: SwapMealTabType) {
    this.click(`#${tab}-segment`);
    this.waitForElementToNotAppear('app-loader');
  }

  setRecipeTitle() {
    cy.get('.recipes-list app-suggested-recipe li > div.suggested-recipe__details strong')
      .first()
      .then(($elm) => {
        this.swapRecipeTitle = $elm.text().trim();
      });
  }
  clickSwapRecipeBtn() {
    this.setRecipeTitle();
    cy.get('.recipes-list app-suggested-recipe').first().find('li > button').click();
    this.waitForElementToNotAppear('app-swap-meal-popup');
  }

  checkSwappedMeal() {
    this.getFirstDayBreakfast()
      .find('.meal__dish')
      .then(($elm) => {
        expect($elm.text().trim()).equal(this.swapRecipeTitle);
      });
  }

  searchRecipe(text: string) {
    cy.get('#search-input').type(`${text}{enter}`, {force: true});
    this.waitForElementToNotAppear('app-loader');
    this.waitForElementToAppear('.recipes-list app-suggested-recipe li > button');
    // todo fix this
    cy.wait(1000);
  }

  checkSearchResultContains(text: string) {
    cy.get('app-suggested-recipe strong.suggested-recipe__title').contains(text);
  }

  resetMealPlan() {
    this.clickElementWithText('Reset meal plan');
    cy.get('button.alert-button > span').contains('Yes').click();
    this.waitForElementToNotAppear('ion-alert');
    this.waitForElementToNotAppear('app-loader');
  }

  checkDefaultBreakfast() {
    this.getFirstDayBreakfast()
      .find('h3.meal__dish')
      .then(($elm) => {
        expect($elm.text().trim()).equal(this.originalRecipeTitle);
      });
  }
}
