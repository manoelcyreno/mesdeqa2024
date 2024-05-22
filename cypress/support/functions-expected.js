function expectedResult_HaveText(element, text) {
  element.should('have.text', text)
}

function expectedResult_IsElementDisable(element) {
  element.should('be.disabled')
}

function expectedResult_ElementHaveAttribute(element, value) {
  element.should('have.attr', value)
}

Cypress.Commands.add('expectedResult_HaveText', expectedResult_HaveText)
Cypress.Commands.add(
  'expectedResult_IsElementDisable',
  expectedResult_IsElementDisable,
)
Cypress.Commands.add(
  'expectedResult_ElementHaveAttribute',
  expectedResult_ElementHaveAttribute,
)
