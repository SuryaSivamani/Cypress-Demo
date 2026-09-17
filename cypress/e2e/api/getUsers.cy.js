describe('GET Users', () => {
  
  it('should retrieve all users', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2'
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.task(
            'saveGetResponseToExcel', {
                url: 'https://reqres.in/api/users?page=2',
                responseData: response.body.data
            }
        );

      });
  });
});