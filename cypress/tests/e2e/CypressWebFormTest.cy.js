require('cypress-xpath')

import HomePageLocators from '../pageObject/HomePageLocators'
import SuccessPageLocators from '../pageObject/SuccessPageLocators'

const baseUrl = Cypress.config('baseUrlE2E')
const homePageLocators = new HomePageLocators()
const successPageLocators = new SuccessPageLocators()

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
    cy.writeText(homePageLocators.getFieldID(), this.data.smallText)
    cy.writeText(homePageLocators.getFieldPassword(), 'passwordField')
    cy.writeText(homePageLocators.getFieldTextarea(), this.data.bigText)
    cy.writeText(homePageLocators.getFieldDate(), '08/21/1988')

    cy.checkOrUncheckElement(homePageLocators.getCheckbox1(), 'uncheck')
    cy.checkOrUncheckElement(homePageLocators.getCheckbox2(), 'check')
    cy.checkOrUncheckElement(homePageLocators.getRadioButton2(), 'check')

    cy.selectElement(homePageLocators.getSelectElement(), 'Two')

    cy.clickOnElement(homePageLocators.getSubmitButton())

    const expectedMessage = 'Received!'
    cy.expectedResult_HaveText(
      successPageLocators.getMessage(),
      expectedMessage,
    )
  })

  it(['medium'], 'Validate If Disable Input Is Disabled', function () {
    cy.expectedResult_IsElementDisable(homePageLocators.getDisabledElement())
  })

  it(['high'], 'Validate If Readonly Input Can Not Be Editable', function () {
    cy.expectedResult_ElementHaveAttribute(
      homePageLocators.getReadOnlyElement(),
      'readonly',
    )
  })

  it(['medium'], 'Validate Web Form Page Title is the expected', function () {
    const expectedMessage = 'Web form'

    cy.title().should('eq', expectedMessage)
  })
})
