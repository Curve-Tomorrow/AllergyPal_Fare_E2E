const breakfast_recipie_name_xpath = "//div[contains(text(),'Breakfast')]//following-sibling::/div/h3";
const stdTimeout = 60000;

class TodoPage {
  // @ts-ignore
  clickOnRespectiveQuestionnaire(questionnaire_name, stdTimeout) {
    cy.findAllByText(questionnaire_name, {timeout: stdTimeout})
      .filter(':visible')
      .first()
      .parentsUntil('li.tasks__item')
      .parent()
      .findByText(/Start/i)
      .click({force: true});
  }
}

export {TodoPage, stdTimeout, breakfast_recipie_name_xpath};
