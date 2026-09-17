describe('put users', () => {

    it('should put the user', () => {

        const requestBody = {
              "name": "morpheus",
  "job": "zion resident"      
        }
        cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body: requestBody
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(requestBody);
        cy.task(
            'putResponseToExcel', {
                url: 'https://reqres.in/api/users/2',
                requestBody: requestBody,
                responseData: response.statusText
            }
        );

      });
    })
})