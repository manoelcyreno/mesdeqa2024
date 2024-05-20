const baseUrl = Cypress.config('baseUrlApi')
const header = {
  'Content-Type': 'application/json',
}

function getJsonPlaceHolder(id) {
  if (id) {
    cy.request({
      method: 'GET',
      url: baseUrl + `/posts/${id}`,
      headers: header,
    }).then((response) => {
      expect(response.status).to.eq(200)
      return response
    })
  } else {
    cy.log('A case has not been created to cancel.')
  }
}

function postJsonPlaceHolder(body, id) {
  if (id) {
    cy.request({
      method: 'POST',
      url: baseUrl + `/consultation/${id}/close`,
      headers: header,
      body: body,
    }).then((response) => {
      expect(response.status).to.eq(201)
      return response
    })
  } else {
    cy.log('A case has not been created to cancel.')
  }
}

Cypress.Commands.add('getJsonPlaceHolder', getJsonPlaceHolder)
Cypress.Commands.add('postJsonPlaceHolder', postJsonPlaceHolder)
