import BasePage from '../utils/base.page';

const FIRST_NAME_SELECTOR = '#first_name > input';
const LAST_NAME_SELECTOR = '#last_name > input';
const EMAIL_SELECTOR = 'app-register #email > input';
const CONFIRM_EMAIL_SELECTOR = 'app-register #confirm_email > input';
const PASSWORD_SELECTOR = 'app-register #password > input';
const CONFIRM_PASSWORD_SELECTOR = 'app-register #confirm_password > input';
const REGISTER_BTN_SELECTOR = 'app-register #registerButton';
const USERNAME_SELECTOR = 'app-register #username > input';
const GO_TO_LOGIN_BTN = 'app-register > ion-content > div.custom-form.success-message-container > ion-button';

export interface Register {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
}

export class RegistrationPage extends BasePage {
  constructor() {
    super();
  }

  fillForm(register: Register) {
    const {first_name, last_name, email, password, username} = register;
    this.type(FIRST_NAME_SELECTOR, first_name);
    this.type(LAST_NAME_SELECTOR, last_name);
    this.type(EMAIL_SELECTOR, email);
    this.type(CONFIRM_EMAIL_SELECTOR, email);
    this.type(PASSWORD_SELECTOR, password);
    this.type(CONFIRM_PASSWORD_SELECTOR, password);
    this.type(USERNAME_SELECTOR, username);
  }

  register() {
    this.click(REGISTER_BTN_SELECTOR);
    this.click(GO_TO_LOGIN_BTN);
  }
}
