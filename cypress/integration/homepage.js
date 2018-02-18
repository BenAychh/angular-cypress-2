

describe('Biz Box Home Page', () => {
  it('has the correct title', () => {
    cy.visit('/');
    cy.title().should('equal', 'BizBox, The Services, Team and Tools You Need to Start, Run and Grow Your Business.');
  });
});
