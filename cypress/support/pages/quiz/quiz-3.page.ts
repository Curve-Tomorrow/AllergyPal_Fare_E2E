import BasePage from '../../utils/base.page';

export interface QuizModel3 {
  diabetes: 'Type 2 Diabetes' | 'Pre-diabetes' | 'Nothing';
  high_bp: 'Yes' | 'No';
  family_diabetes: 'Yes' | 'No';
}

export class QuizThreePage extends BasePage {
  DIABETES_SELECTOR = 'diabetes';
  HIGH_BP_SELECTOR = 'high_bp';
  FAMILY_DIABETES_SELECTOR = 'familial_diabetes';

  NEXT_BTN_SELECTOR = '#next-button';

  constructor() {
    super();
  }

  completeQuiz(model: QuizModel3) {
    const {diabetes, high_bp, family_diabetes} = model;
    this.checkCustomRadio(this.DIABETES_SELECTOR, diabetes);
    this.checkCustomRadio(this.HIGH_BP_SELECTOR, `${high_bp}`);
    this.checkCustomRadio(this.FAMILY_DIABETES_SELECTOR, `${family_diabetes}`);

    this.clickNext();
  }

  clickNext() {
    this.click(this.NEXT_BTN_SELECTOR);
    this.waitForElementToNotAppear(this.DIABETES_SELECTOR);
  }
}
