import BasePage from '../../utils/base.page';
const EMAIL_SELECTOR = '#user_email';
const PASSWORD_SELECTOR = '#user_password';
const LOGIN_BTN_SELECTOR = '.btn';

export class AdminLoginPage extends BasePage {
  constructor() {
    super();
  }

  login(username: string, password: string) {
    this.type(EMAIL_SELECTOR, username);
    this.type(PASSWORD_SELECTOR, password);
    this.click(LOGIN_BTN_SELECTOR);
  }

  visit() {
    this.goToAdminUrl('/login');
  }
}
