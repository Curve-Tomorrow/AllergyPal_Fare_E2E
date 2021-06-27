import BasePage from '../utils/base.page';
export class WorkoutPage extends BasePage {
  constructor() {
    super();
  }

  checkWorkoutForWeek() {
    cy.get('section app-workout-banner').should('have.length', 7);
  }

  clickFirstWorkoutThumbnail() {
    cy.get('app-workout-page app-workout-banner')
      .first()
      .within(() => {
        cy.get('figure > img').click();
      });
  }

  clickMarkDoneBtn() {
    cy.get('app-workout-popup header button span').contains('Mark done').click();
  }

  markTomorrowWorkoutAsDone() {
    // the div is scroll down and scrollIntoView not working :(
    cy.reload();
    cy.get('section app-workout-banner')
      .eq(1)
      .within(() => {
        cy.get('button').contains('Mark as done').click();
      });
  }

  checkTomorrowWorkoutAsDone() {
    cy.get('section app-workout-banner')
      .eq(1)
      .within(() => {
        cy.get('button').should('contain.text', 'Done');
      });
  }

  checkCongratulatoryMessage() {
    this.waitForElementToAppear('ion-alert');
    this.click('ion-alert button');
    this.waitForElementToNotAppear('ion-alert');
  }
}
