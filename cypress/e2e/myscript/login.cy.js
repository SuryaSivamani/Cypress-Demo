import loginPage from '../../pages/login.js';

describe ('login',() =>{
    const l = new loginPage();

     beforeEach(() => {

        cy.visit('/');
        cy.contains('Log In').click();
    });

    it('Navigate to the login page',() => {

        cy.fixture('login').then((data) => {
            l.loginExistingUser(data.username, data.password);
              cy.get('.title').should('contain','Accounts Overview');

        })

    })
})