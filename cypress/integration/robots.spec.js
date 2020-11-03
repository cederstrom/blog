/// <reference types="cypress" />

context('When getting robots.txt', () => {
  it('Shall have sitemap entry', () => {
    cy.request('/robots.txt').its('body').should('eq', 'Sitemap: https://kmem.se/sitemap.xml');
  });
});
