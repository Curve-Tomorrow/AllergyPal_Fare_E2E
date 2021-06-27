import BasePage from '../../utils/base.page';

export interface QuizModel2 {
  height_unit: 'feet and inches' | 'centimeters';
  height_ft_value?: string;
  height_in_value?: string;
  weight_unit: 'pounds' | 'kilograms' | 'stones';
  weight_value?: string;
  waist_unit: 'inches' | 'centimeters';
  waist_value: string;
}

export class QuizTwoPage extends BasePage {
  HEIGHT_UNIT_SELECTOR = 'height_unit';
  HEIGHT_FT_SELECTOR = this.getFormInputSelector('height_ft_value');
  HEIGHT_IN_SELECTOR = this.getFormInputSelector('height_in_value');
  WEIGHT_UNIT_SELECTOR = 'weight_unit';
  WEIGHT_VALUE_SELECTOR = this.getFormInputSelector('weight_value');

  WAIST_UNIT_SELECTOR = 'waist_unit';
  WAIST_VALUE_SELECTOR = this.getFormInputSelector('waist_value');
  NEXT_BTN_SELECTOR = '#next-button';

  constructor() {
    super();
  }

  completeQuiz(model: QuizModel2) {
    const {height_unit, height_ft_value, height_in_value, weight_unit, weight_value, waist_value, waist_unit} = model;
    this.checkCustomRadio(this.HEIGHT_UNIT_SELECTOR, height_unit);
    if (height_ft_value && height_in_value) {
      this.type(this.HEIGHT_FT_SELECTOR, height_ft_value);
      this.type(this.HEIGHT_IN_SELECTOR, height_in_value);
    }
    this.checkCustomRadio(this.WEIGHT_UNIT_SELECTOR, weight_unit);
    if (weight_value) {
      this.type(this.WEIGHT_VALUE_SELECTOR, weight_value);
    }
    this.checkCustomRadio(this.WAIST_UNIT_SELECTOR, waist_unit);
    this.type(this.WAIST_VALUE_SELECTOR, waist_value);
    this.clickNext();
  }

  clickNext() {
    this.click(this.NEXT_BTN_SELECTOR);
    this.waitForElementToNotAppear(this.HEIGHT_UNIT_SELECTOR);
  }
}
