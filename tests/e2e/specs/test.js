// https://docs.cypress.io/api/introduction/api.html

describe('E2E Delete, New, Edit, Move', function() {

  it('Test creating, editing, moving and delete', function() {

    cy.viewport(1920, 1089)

    cy.visit('http://localhost:8080/')

    cy.clearLocalStorage()

    cy.get('#app > .container > .grid-content > #\\30 > button').click()

    cy.get('#app > .container > .grid-toolbar > .toolbar > button').click()

    cy.get('#app > .container > .grid-content > #\\30 > div').dblclick()

    cy.get('#app > .container > .grid-content > #\\30 > input').type('new content...test')

    cy.get('body > #app > .container > .grid-content').click()

    cy.get('body > #app > .container > .grid-content > #\\30').trigger('mousedown').trigger('mousemove', { clientX: 800, clientY: 200 })

    cy.get('body > #app > .container > .grid-content > #\\30').click()


  })

})
