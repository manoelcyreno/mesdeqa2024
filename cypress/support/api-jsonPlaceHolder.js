const baseUrl = Cypress.config('baseUrlApi')
const header = {
  'Content-Type': 'application/json',
}

function getJsonPlaceHolder(id) {
  cy.request({
    method: 'GET',
    url: baseUrl + `/posts/${id}`,
    headers: header,
  }).then((response) => {
    expect(response.status).to.eq(200)
    return response
  })
}

function postJsonPlaceHolder(body) {
  cy.request({
    method: 'POST',
    url: baseUrl + '/posts',
    headers: header,
    body: body,
  }).then((response) => {
    expect(response.status).to.eq(201)
    return response
  })
}

Cypress.Commands.add('getJsonPlaceHolder', getJsonPlaceHolder)
Cypress.Commands.add('postJsonPlaceHolder', postJsonPlaceHolder)
