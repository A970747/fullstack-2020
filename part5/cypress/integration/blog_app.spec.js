describe('Blog App', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', function() {
    cy.contains('Blog Posts');
  });

  it('login form can be opened', function() {
    cy.contains('Login').click();
  });

  it('user can login', function() {
    cy.contains('Login').click();
    cy.get('#username').type('User1');
    cy.get('#password').type('password');
    cy.get('#login-button').click();

    cy.contains('User1 logged in');
  });
});
