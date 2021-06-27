import BasePage from '../../utils/base.page';
export interface QuizModel4 {
  weight_unit: 'pounds' | 'kilograms' | 'stone';
  weight_goal_value: string;
  waist_unit: 'inches' | 'centimeters';
  waist_goal_value: string;
  ambition: 'Very ambitious' | 'Moderately ambitious' | 'Not very ambitious';
}

export class QuizFourPage extends BasePage {
  WEIGHT_GOAL_UNIT_SELECTOR = 'weight_goal_unit';
  WEIGHT_GOAL_VALUE_SELECTOR = this.getFormInputSelector('weight_goal_value');

  WAIST_GOAL_UNIT_SELECTOR = 'waist_goal_unit';
  WAIST_GOAL_VALUE_SELECTOR = this.getFormInputSelector('waist_goal_value');
  AMBITION_SELECTOR = 'ambition';

  NEXT_BTN_SELECTOR = '#next-button';

  constructor() {
    super();
  }

  completeQuiz(model: QuizModel4) {
    const {weight_unit, weight_goal_value, waist_goal_value, waist_unit, ambition} = model;
    this.checkCustomRadio(this.WEIGHT_GOAL_UNIT_SELECTOR, weight_unit);
    this.type(this.WEIGHT_GOAL_VALUE_SELECTOR, weight_goal_value);
    this.checkCustomRadio(this.WAIST_GOAL_UNIT_SELECTOR, waist_unit);
    this.type(this.WAIST_GOAL_VALUE_SELECTOR, waist_goal_value);
    this.checkCustomRadio(this.AMBITION_SELECTOR, ambition);
    this.clickNext();
  }

  clickNext() {
    this.click(this.NEXT_BTN_SELECTOR);
    this.waitForElementToNotAppear(this.WEIGHT_GOAL_UNIT_SELECTOR);
  }
}
