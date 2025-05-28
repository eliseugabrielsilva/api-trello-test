describe('Trello teste API', () => {

    beforeEach(() => {
      Cypress.config('requestTimeout', 10000);
    });
  
    it('Cadastrar um board', () => {
      cy.request({
        url: 'https://apibr-dev.edenred.com/bureau/antifraude/api/analisecompliance/analisar',
        method: 'POST',
        body: {
          nome: 'ELISEU GABRIEL',
          documento: '35821014875'
        }
        
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(`POST simulado retornou ID: ${response.body.id}`);
        expect(response.body.tipoAcaoRating).to.eq("LiberarAutomaticamente");
        expect(response.body.rating.tipoRiscoRating).to.eq("Baixo");
      });
    });
         
    });


    it('Cadastrar um card', () => {
      cy.request({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').and.not.to.be.empty;
        expect(response.body[0].title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
      });
    });

    it('Excluir um card', () => {
      cy.request({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').and.not.to.be.empty;
        expect(response.body[0].title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
      });
    });
    
    it('Excluir um board', () => {
      cy.request({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array').and.not.to.be.empty;
        expect(response.body[0].title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
      });
    });
    