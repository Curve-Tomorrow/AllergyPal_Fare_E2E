import {getCypressOptions, getToken} from '../utils';
import BasePage from '../utils/base.page';
const REGISTER_BTN_SELECTOR = '#registerButton';

export class LoginPage extends BasePage {
  constructor() {
    super();
  }

  login(username: string, password: string) {
    const options = getCypressOptions('POST', 'password', {username, password});
    cy.request(options).then((res) => {
      const {access_token} = res.body;
      try {
        localStorage.setItem('token', access_token);
        this.goToUrl('checkout');
      } catch (err) {
        console.log(err);
      }
    });
  }

  visit() {
    this.goToUrl('login');
  }

  clickOnRegisterBtn() {
    this.click(REGISTER_BTN_SELECTOR);
  }
}
