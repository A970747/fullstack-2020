describe('Blog App', function() {
  before(function() {
    const user = {
      name: 'User1',
      username: 'User1',
      password: 'password',
    };
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    cy.request('POST', 'http://localhost:3001/api/users', user);
  });



  describe('page initializes correctly', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000');
    });

    it('front page can be opened', function() {
      cy.contains('Blog Posts');
    });

    it('login form can be opened', function() {
      cy.contains('Login')
        .click();
    });

    it('login can fail', function() {
      cy.contains('Login')
        .click();
      cy.get('#username')
        .type('User1');
      cy.get('#password')
        .type('wrongPassword');
      cy.get('#login-button')
        .click();

      cy.contains('invalid username');
      cy.get('html').should('not.contain', 'logged in');
    });

    it('user can login', function() {
      cy.contains('Login')
        .click();
      cy.get('#username')
        .type('User1');
      cy.get('#password')
        .type('password');
      cy.get('#login-button')
        .click();

      cy.contains('User1 logged in');
    });
  });

  describe('while user is logged in', function() {
    beforeEach(function() {
      cy.login({
        name: 'User1',
        username: 'User1',
        password: 'password',
      });
      cy.visit('http://localhost:3000');
    });

    it('user can post a blog', function() {
      cy.contains('Post Blog')
        .click();

      cy.get('#blogTitle')
        .type('The Crown');
      cy.get('#blogAuthor')
        .type('Queen Elizabeth');
      cy.get('#blogUrl')
        .type('www.pretendURL.');
      cy.get('#blogLikes')
        .type(2);
      cy.get('#blogSubmit')
        .click();

      cy.contains('view');
    });

    it('user can modify likes on a blog', function() {
      cy.contains('view')
        .click();
      cy.contains('likes')
        .contains('2');
      cy.contains('like')
        .click();
      cy.contains('likes')
        .contains('3');
    });

    it('user can delete a blog', function() {
      cy.contains('The Crown')
        .contains('delete')
        .click();
    });
  });
});
