/// <reference types="cypress" />

describe('API Test suite about: Get Request', function () {
  let getResponse
  const getId = 1

  before(function () {
    // Clear cookies and cache before start the tests
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.getJsonPlaceHolder(getId).then((response) => {
      getResponse = response
    })
  })

  it(['critical'], 'Validate response is application/json', function () {
    cy.wrap(getResponse)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it(['critical'], 'Validate test for status code is 200', function () {
    cy.wrap(getResponse).its('status').should('eq', 200)
  })

  it(['high'], 'Validate test body content return valid info', function () {
    cy.wrap(getResponse).then((response) => {
      const keys = Object.keys(response.body)
      const defaultParameters = ['userId', 'id', 'title', 'body']

      expect(defaultParameters.every((element) => keys.includes(element))).to.be
        .true
    })
  })

  it(['medium'], 'Validate if Id is a non-negative integer', function () {
    cy.wrap(getResponse.body)
      .its('id')
      .should('be.a', 'number')
      .and('to.be.at.least', 0)
  })
})
