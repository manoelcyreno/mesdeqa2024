class HomePageLocators {
  getCheckbox1() {
    return cy.get('#my-check-1')
  }

  getCheckbox2() {
    return cy.get('#my-check-2')
  }

  getDisabledElement() {
    return cy.get('input[name="my-disabled"]')
  }

  getFieldDate() {
    return cy.get('input[name="my-date"]')
  }

  getFieldID() {
    return cy.get('#my-text-id')
  }

  getFieldPassword() {
    return cy.get('input[name="my-password"]')
  }

  getFieldTextarea() {
    return cy.get('textarea[name="my-textarea"]')
  }

  getSelectElement() {
    return cy.get('select')
  }

  getRadioButton2() {
    return cy.get('#my-radio-2')
  }

  getReadOnlyElement() {
    return cy.get('input[name="my-readonly"]')
  }

  getSubmitButton() {
    return cy.get('button')
  }
}

export default HomePageLocators
