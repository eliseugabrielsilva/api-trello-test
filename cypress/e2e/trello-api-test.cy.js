

describe('Automação Trello API', () => {
  let boardId;
  let cardId = '';
  let listId = '';

  it('Cadastrar um board', () => {
    cy.request({
      method: 'POST',
      url: `/boards/?name=BoardTeste&key=${key}&token=${token}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      boardId = response.body.id;
    });
  });

  it('Cadastrar um card', () => {
    cy.request({
      method: 'GET',
      url: `/boards/${boardId}/lists?key=${key}&token=${token}`
    }).then((res) => {
      listId = res.body[0].id;

      cy.request({
        method: 'POST',
        url: `/cards?name=CardTeste&idList=${listId}&key=${key}&token=${token}`
      }).then((response) => {
        expect(response.status).to.eq(200);
        cardId = response.body.id;
      });
    });
  });

  it('Excluir um card', () => {
    cy.request({
      method: 'DELETE',
      url: `/cards/${cardId}?key=${key}&token=${token}`
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Excluir um board', () => {
    cy.request({
      method: 'DELETE',
      url: `/boards/${boardId}?key=${key}&token=${token}`
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
