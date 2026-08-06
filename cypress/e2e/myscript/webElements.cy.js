describe("cypress test ",() =>{
    it('Navigate to the webElemet',() => {
        cy.visit('/');
        cy.once('uncaught:exception',() => false);
        cy.contains("tests").click();
        cy.contains("Web_Elements").click({ force: true })
        cy.get("#Text1").clear().type("Welcome to cypress testing")

    });

    it('Enter the texts in TEXTAREA',() => {
        cy.once('uncaught:exception',() => false);
        cy.visit('/');
        cy.contains("tests").click();
        cy.contains("Web_Elements").click({ force: true })
        cy.get(".Text3").clear().type("Welcome to cypress testing")

    });

    it('click on button1',() => {
        cy.once('uncaught:exception',() => false);
        cy.visit('/');
        cy.contains("tests").click();
        cy.contains("Web_Elements").click({ force: true })
        cy.get("#Button1").click();

    });

    it('choose a file',() => {
        cy.once('uncaught:exception',() => false);
        cy.visit('/');
        cy.contains("tests").click();
        cy.contains("Web_Elements").click({ force: true })
        cy.get("#File1").click({ force: true }).selectFile("cypress/files/images.jpeg")
    });

});