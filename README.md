# Automação de testes de API do Trello



## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) (v14.4.0)
- Node.js (recomendado v16+)
- JavaScript

  # Modo de utilização do TOKEN e API
Para utilizar o TOKEN e API Key extrair o zip utilizando a senha: serasa, após isso copiar e colar no script trello-api-test.cy.js substituindo a linha 1 e 2 enviado por email:

**Foi necessário realizar esse procedimento temporariamente, pois o GIT HUB Não permite subir as credenciais, então futuramente será desenvolvido a inserção das credenciais direto no GIT HUB**

const key = '';
const token = '';

## Como Rodar os Testes

1. **Instale as dependências:**
   ```sh
   npm install
   ```

2. **Execute os testes em modo headless:**
   ```
    npm test
   ```

   ou

   ```
   npx cypress run
    ```

3. **Execute os testes com interface gráfica:**
   ```
    npm run cy:open
   ```

   ou

   ```
   npx cypress open
    ```

Os testes estão localizados na pasta e2e.

## Melhorias que poderão ser implementadas

**Gerenciamento de credenciais:**
- Utilizaráveis de ambiente para key e token ao invés de deixá-los expostos no código.
  

**Separação de cenários:**
- Modularizar os testes para facilitar manutenção e reuso de código.

**Cobertura de testes negativos:**
- Adicionar cenários para validar respostas de erro da API.

**Relatórios de testes:**
- Integrar geração de relatórios (ex: Mochawesome).

**Integração contínua:**
- Configurar pipeline CI (ex: GitHub Actions) para rodar os testes automaticamente a cada push.

**Validação de dados:**
- Implementar validações mais detalhadas nas respostas da API.

**Uso de comandos customizados:**
- Centralizar requisições repetidas em commands.js.

_________________________________________________________________________________________________
Desenvolvido por Eliseu.
