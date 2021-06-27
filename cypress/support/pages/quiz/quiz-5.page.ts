import {verify} from 'cypress/types/sinon';
import BasePage from '../../utils/base.page';

export interface QuizModel5 {
  vegetarian: 'Yes' | 'No';
  servings: number;
  ingredient: 'UK' | 'US' | 'Australia';
  unit: 'Metric' | 'Imperial';
}

export class QuizFivePage extends BasePage {
  VEGETARIAN_SELECTOR = 'vegetarian';
  SERVINGS_SELECTOR = "[formcontrolname='servings']";
  INGREDIENT_NAMES_SELECTOR = 'ingredient_names';
  UNITS_SELECTOR = 'units';

  NEXT_BTN_SELECTOR = '#next-button';

  constructor() {
    super();
  }

  completeQuiz(model: QuizModel5) {
    const {vegetarian, servings, ingredient, unit} = model;
    this.checkCustomRadio(this.VEGETARIAN_SELECTOR, vegetarian);
    this.select(this.SERVINGS_SELECTOR, servings);
    this.checkCustomRadio(this.INGREDIENT_NAMES_SELECTOR, ingredient);
    this.checkCustomRadio(this.UNITS_SELECTOR, unit);
    this.clickNext();
  }

  clickNext() {
    this.click(this.NEXT_BTN_SELECTOR);
    this.waitForElementToNotAppear(this.VEGETARIAN_SELECTOR);
  }
}
