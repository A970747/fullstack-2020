describe('testing commands', function() {
  it('lets you login with command', function() {
    cy.visit('http://localhost:3000');
    cy.login({
      name: 'User1',
      username: 'User1',
      password: 'password',
    });
  });
});
