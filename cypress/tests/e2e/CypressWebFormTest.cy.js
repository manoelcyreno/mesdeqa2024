require('cypress-xpath')

import HomePageLocators from '../pageObject/HomePageLocators'
import SuccessPageLocators from '../pageObject/SuccessPageLocators'

const baseUrl = Cypress.config('baseUrlE2E')
const hpl = new HomePageLocators()
const spl = new SuccessPageLocators()

describe('E2E Test suite about: Cypress Web Form Test Suite', function () {
  beforeEach(function () {
    cy.fixture('data-text-field').then(function (data) {
      this.data = data
    })

    // Clear cookies and cache before start the tests
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.visit(baseUrl)
  })

  it(['critical'], 'Submit Web Form Page With Success', function () {
    hpl.getFieldID().type(this.data.smallText)
    hpl.getFieldPassword().type('passwordField')
    hpl.getFieldTextarea().type(this.data.bigText)

    hpl.getSelectElement().select('Two')

    hpl.getCheckbox1().uncheck()
    hpl.getCheckbox2().check()
    hpl.getRadioButton2().check()

    hpl.getFieldDate().type('08/21/1988')

    hpl.getSubmitButton().click()

    var expectedMessage = 'Received!'
    spl.getMessage().should('have.text', expectedMessage)
  })

  it(['medium'], 'Validate If Disable Input Is Disabled', function () {
    hpl.getDisabledElement().should('be.disabled')
  })

  it(['high'], 'Validate If Readonly Input Can Not Be Editable', function () {
    hpl.getReadOnlyElement().should('have.attr', 'readonly')
  })

  it(['medium'], 'Validate Web Form Page Title is the expected', function () {
    const expectedMessage = 'Web form'

    cy.title().should('eq', expectedMessage)
  })
})
