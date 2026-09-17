describe('delete users', () => {

    it('should delete the user', () => {

        const requestBody = {
              "name": "morpheus",
  "job": "zion resident"      
        }
        cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2'
      })
      .then((response) => {
        expect(response.status).to.eq(204);
        cy.log(requestBody);
        cy.task(
            'deleteResponseToExcel', {
                url: 'https://reqres.in/api/users/2',
                responseData: response.status
            }
        );

      });
    })
})