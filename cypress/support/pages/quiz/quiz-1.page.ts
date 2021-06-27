import BasePage from '../../utils/base.page';
import {QuizModel4} from './quiz-4.page';

export interface QuizModel1 {
  age: string;
  gender: 'Male' | 'Female';
  ethnicity: string;
  timezone: string;
}

export class QuizOnePage extends BasePage {
  AGE_SELECTOR = this.getFormInputSelector('age');
  GENDER_SELECTOR = 'sex';
  ETHNICITY_SELECTOR = 'ion-select[formcontrolname="ethnicity"]';
  TIMEZONE_SELECTOR = 'ion-input-8';
  NEXT_BTN_SELECTOR = '#next-button';

  constructor() {
    super();
  }

  completeQuiz(model: QuizModel1) {
    const {age, gender, ethnicity, timezone} = model;
    this.type(this.AGE_SELECTOR, age);
    this.checkCustomRadio(this.GENDER_SELECTOR, gender);
    this.select(this.ETHNICITY_SELECTOR, ethnicity);
    this.selectDropdown(this.TIMEZONE_SELECTOR, timezone);
    this.clickNext();
  }

  clickNext() {
    this.click(this.NEXT_BTN_SELECTOR);
    this.waitForElementToNotAppear(this.AGE_SELECTOR);
  }
}
