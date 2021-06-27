//const webAppLoginURL = 'https://fast800-webapp-staging.herokuapp.com/login';
const webAppLoginURL = 'https://fast800-development.vercel.app/login/';
const email_xpath = "//ion-input[@id='email']";
const password_xpath = "//ion-input[@id='password']";
const password = 'Abcd#1234';
const user_name = 'user50142@mail.com';
//const user_name = 'mail2asis@gmail.com';
const login_button_xpath = "//ion-button[@id='loginButton']";

class LoginPage {
  // @ts-ignore
  Login(email_xpath, password_xpath, user_name, password, login_button_xpath) {
    //cy.xpath(email_xpath).clear();
    cy.xpath(email_xpath).type(user_name);

    //cy.xpath(password_xpath).clear();
    cy.xpath(password_xpath).type(password);

    cy.xpath(login_button_xpath).click();
  }
}

export {email_xpath, password_xpath, password, login_button_xpath, user_name, LoginPage, webAppLoginURL};
