Cypress.Commands.add('apiRequest', (method, endpoint, body = null) => {
    return cy.request({
        method,
        url: endpoint,
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : `${Cypress.env('authToken')}`
        },
        body
    })
})
