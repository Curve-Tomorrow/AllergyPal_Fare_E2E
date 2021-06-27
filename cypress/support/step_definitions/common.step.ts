import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import {deleteAuth0TestingUser, resetAppData} from '../utils';
import BasePage, {TAB} from '../utils/base.page';
import {PAGE} from '../utils/pages';
import {EMAIL, PASSWORD} from './e2e.step';
const basePage = new BasePage();

Given(/^application has been reset$/, () => {
  resetAppData();
  deleteAuth0TestingUser();
});

Given('I go to {string} page', (path: string) => {
  basePage.goToUrl(PAGE[path]);
});

Then('I should be in {string} page', (page: string) => {
  basePage.getCurrentPath().should('eq', PAGE[page]);
});

When('I click button with text {string}', (btnText: string) => {
  basePage.clickBtnWithText(btnText);
});

// we also need information about the current page as there might be multiple component
// having app-navigation with display: none
When('I click {string} tab from {string} page', (tab: TAB, page: string) => {
  basePage.clickTab(tab, page);
});

When('I click a link with text {string}', (text: string) => {
  basePage.clickLinkWithText(text);
});
