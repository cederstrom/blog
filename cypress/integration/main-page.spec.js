/// <reference types="cypress" />

context('When visiting main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Shall have title in heading', () => {
    cy.contains('h1', 'Andreas Cederström');
  });

  it('Shall have title in page title', () => {
    cy.title().should('eq', 'Andreas Cederström blog');
  });

  it('Shall have list of blog posts', () => {
    cy.get('[testid="posts"]').get('article').should('have.length.greaterThan', 0);
  });

  context('Blog posts list item', () => {
    const lastBlogPost = () => cy.get('[testid="posts"]').get('article').last();

    it('Shall have heading', () => {
      lastBlogPost().within(() => cy.get('h2').should('have.text', 'Hello world'));
    });

    it('Heading shall be clickable', () => {
      lastBlogPost().get('h2 > a').should('have.attr', 'href', '/hello-world/');
    });

    it('Shall have published date', () => {
      lastBlogPost().contains('Publised on 2020-11-02');
    });

    it('Shall have description', () => {
      lastBlogPost().contains('Welcome to my blog.');
    });
  });
});
