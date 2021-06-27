# Cypress testing

### Getting started

Install npm dependencies by exec `yarn`

### Commands

- `yarn cy:run` to run tests
- `yarn cy:open` to run tests in interactive mode for development
- `yarn lint` to lint files

### Queries

#### [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/api-queries#queries) (recommended)

Note:

- `findBy*` APIs search for an element and throw an error if nothing found
- `findAllBy*` APIs search for all elements and an error if nothing found
- `queryBy*` APIs search for an element and returns null if nothing found
- `queryAllBy*` APIs search for all elements and return empty array if nothing found

#### [Cypress xpath](https://github.com/cypress-io/cypress-xpath#use)

#### [Cypress#get](https://docs.cypress.io/api/commands/get.html#Usage)

### Useful Links

- [Guides](https://docs.cypress.io/guides/)
- [Debugging](https://docs.cypress.io/guides/guides/debugging.html)
- [API](https://docs.cypress.io/api/)
- [Plugins](https://docs.cypress.io/plugins/)
- [Examples](https://docs.cypress.io/examples/)

### More Settings

- [IDE integrations](https://docs.cypress.io/guides/tooling/IDE-integration.html#Extensions-amp-Plugins)
- [Plugins](https://docs.cypress.io/guides/tooling/plugins-guide.html)
- [Reporters](https://docs.cypress.io/guides/tooling/reporters.html)
- [Visual Testing](https://docs.cypress.io/guides/tooling/visual-testing.html)
- [Code Coverage](https://docs.cypress.io/guides/tooling/code-coverage.html)

### IDE Integration

#### VS Code

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Cucumber](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
