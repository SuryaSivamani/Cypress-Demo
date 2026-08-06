describe('cypress test ',() =>{

    it('Navigate to the login page',() => {
        cy.visit('/');
        //cy.visit('/Identity/Account/Login');
        cy.url().should('contains','admlucid');
        cy.url().should('eq','Home Page - Lucid');
    })

    it('Login adm Lucid', () => {
        cy.Login("test2@admluicd.com", "Test@1234")
    })
});