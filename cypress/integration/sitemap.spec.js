/// <reference types="cypress" />

context('When sitemap', () => {
  it('Shall contains main page', () => {
    cy.request('/sitemap.xml').its('body').should('contain', '<loc>https://kmem.se/</loc>');
  });

  it('Shall contains first blog post', () => {
    cy.request('/sitemap.xml')
      .its('body')
      .should('contain', '<loc>https://kmem.se/hello-world/</loc>');
  });
});
