describe('cypress test ',() =>{

    it('Navigate to Web Elements and assert them using should', () =>{
        cy.once('uncaught:exception', () => false);

        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Web_Elements').click({ force: true });
        cy.get('h1').contains('Web Elements and Locators'); 
        cy.get('h1').should('have.text','Web Elements and Locators');
         if (cy.get('.Submit3').should('have.value','submit 3'))
            cy.get('.Submit3').click();
        cy.get('#Submit1').should('have.value', 'submit 1').click();

        cy.get('h2').then(($el) => {
            expect($el.text()).to.be.contains("CHILD CARE REGISTRATION")
        })
        })

        it('Navigate to golfand assert them using should', () =>{
        cy.once('uncaught:exception', () => false);

        cy.visit('/');
        cy.contains('Tests').click();
        cy.contains('Golf_Course').click({ force: true });
        cy.get('h1').contains('Golf Courses'); 
        cy.get('h1').should('have.text','Golf Courses');
        cy.get('.select').find('option').should('have.length',11);
            
        cy.get('.btn').first().should('be.visible').click();

        })


})