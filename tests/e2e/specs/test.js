// https://docs.cypress.io/api/introduction/api.html

describe('Clean install  First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Clean install')
  })
})