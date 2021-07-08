import {And, Given, Then} from 'cypress-cucumber-preprocessor/steps';
import {FareWelcomePage} from '../pages/fare.welcome.page';
import {FareRegisterPage} from '../pages/fare.register.page';
import {FareLoginPage} from '../pages/fare.login.page';
import {login1, registration1} from '../utils/dataSet';


const fareWelcomePage = new FareWelcomePage();
const fareRegisterPage = new FareRegisterPage();
const fareLoginPage = new FareLoginPage();

Given(/^I launched the welcome page$/, function() {
  fareWelcomePage.visit();
});
And (/^I clicked on the Get Started button$/, function() {
  fareWelcomePage.clickOnGetStarted();
});
And (/^I signed up with the application$/, function() {
  fareRegisterPage.createNewUser(registration1);
});
Then(/^I signed in with the new user$/, function() {
  fareLoginPage.loginWithNewUser(login1);
});
