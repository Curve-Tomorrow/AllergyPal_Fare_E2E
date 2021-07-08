import BasePage from '../utils/base.page';
import {FareRegisterModel} from './fare.register.page';
const EMAIL_TEXT_BOX_SELECTOR = ':nth-child(1) > .item-field > #email > .native-input';
const PASSWORD_TEXT_BOX_SELECTOR = ':nth-child(2) > .item-field > #password > .native-input';
const LOGIN_BTN_SELECTOR = 'app-login.ion-page > .bottom-content > ion-row.md > :nth-child(2) > #signUpButton';

const HELP_HYPER_LINK_SELECTOR = 'app-login.ion-page > app-app-header > .ion-no-border > .toolbar-title-default > #rightBarButton';

export interface FareLoginModel {
  email: string,
  password: string;
}
export class FareLoginPage extends BasePage {
  constructor() {
    super();
  }

  login(username: string, password: string) {
    this.type(EMAIL_TEXT_BOX_SELECTOR, username);
    this.type(PASSWORD_TEXT_BOX_SELECTOR, password);
    this.click(LOGIN_BTN_SELECTOR);
  }

  loginWithNewUser(login: FareLoginModel) {
    this.type(EMAIL_TEXT_BOX_SELECTOR, login.email);
    this.type(PASSWORD_TEXT_BOX_SELECTOR, login.password);
    this.click(LOGIN_BTN_SELECTOR);
  }

}
