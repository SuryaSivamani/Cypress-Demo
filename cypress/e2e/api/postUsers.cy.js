describe('post users', () => {


    it('should post the user', () => {
        cy.fixture('postUser').then((userData) => {
            cy.wrap(userData).each((user) => {
        cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
            name: user.name,
            job: user.job
        }
      })
      .then((response) => {
        expect(response.status).to.eq(201);
        cy.log(user);
        cy.task(
            'postResponseToExcel', {
                url: 'https://reqres.in/api/users',
                requestBody: user,
                responseData: response.statusText
            }
        );

      });
    })
})
})
})