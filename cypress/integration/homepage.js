

describe('Test', () => {
  it('has the correct title', () => {
    cy.visit('/');
    cy.title().should('equal', 'CypressTest');
  });
});
