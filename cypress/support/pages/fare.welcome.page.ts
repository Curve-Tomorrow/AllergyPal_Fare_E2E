import BasePage from '../utils/base.page';
const GET_STARTED_BTN_SELECTOR = '.button-solid';
const LOG_IN_BTN_SELECTOR = '.secondary-button';

export class FareWelcomePage extends BasePage {
  constructor() {
    super();
  }

  clickOnGetStarted(){
    this.click(GET_STARTED_BTN_SELECTOR);
  }

  clickOnLoginBtn(){
    this.click(LOG_IN_BTN_SELECTOR);
  }
  visit() {
    this.goToFareUrl('/welcome');
  }
}
