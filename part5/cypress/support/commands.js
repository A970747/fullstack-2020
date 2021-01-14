Cypress.Commands.add('login', (user) => {
  cy.request('POST', 'http://localhost:3001/api/login', {...user})
    .then(({body}) => {
      localStorage.setItem('loggedBlogAppUser', JSON.stringify(body));
  });
});

Cypress.Commands.add('createNote', (content) => {
  cy.request({
    url: 'http://localhost:3001/api/blogs',
    method: 'POST',
    body: {...content},
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage
        .getItem('loggedBlogAppUser')).token}`,
    },
  });
});
