export function doUntil(
  getElement: () => Cypress.Chainable<JQuery>,
  nextFn: () => Cypress.Chainable<any>,
  assert: (subject: JQuery) => void = (subject) => expect(subject).to.be.exist
): Cypress.Chainable<JQuery> {
  return getElement()
    .should(() => {})
    .then(($element) => {
      try {
        assert($element);
      } catch (e) {
        return nextFn().then(() => {
          return doUntil(getElement, nextFn, assert);
        });
      }
    });
}
