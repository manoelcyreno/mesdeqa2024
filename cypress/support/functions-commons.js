function writeText(element, text) {
  element.type(text)
}

function clickOnElement(element) {
  element.click()
}

function checkOrUncheckElement(element, checkORuncheck) {
  if (checkORuncheck === 'check') {
    element.check()
  }
  if (checkORuncheck === 'uncheck') {
    element.uncheck()
  }
}

function selectElement(element, value) {
  element.select(value)
}

Cypress.Commands.add('clickOnElement', clickOnElement)
Cypress.Commands.add('checkOrUncheckElement', checkOrUncheckElement)
Cypress.Commands.add('selectElement', selectElement)
Cypress.Commands.add('writeText', writeText)
