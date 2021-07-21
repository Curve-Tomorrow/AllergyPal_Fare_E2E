import {And, Given, Then} from 'cypress-cucumber-preprocessor/steps';
import {FareWelcomePage} from '../pages/fare.welcome.page';
import {FareRegisterPage} from '../pages/fare.register.page';
import {FareLoginPage} from '../pages/fare.login.page';
import {FareAddChildPage} from '../pages/fare.add.child.page';
// @ts-ignore
import {FareHomePage} from '../pages/fare.home.page';
import {addChild1, addChild2, login1, registration1} from '../utils/dataSet';


const fareWelcomePage = new FareWelcomePage();
const fareRegisterPage = new FareRegisterPage();
const fareLoginPage = new FareLoginPage();
const fareAddChildPage = new FareAddChildPage();
const fareHomePage = new FareHomePage();


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
Then(/^I created a new child$/, function() {

   fareHomePage.clickOnAddChild();
   fareAddChildPage.addNewChild(addChild2);

});
Given(/^I delete the previous user$/, function() {

  cy.request({
    method: 'DELETE',
    url: 'https://pen-pal-web.herokuapp.com/api/v1/users',
    body: {
      "user": {
        "email": "mail2asis+1@gmail.com"
      }
    }
  })

})
