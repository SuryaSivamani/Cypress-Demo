describe('Rahul Shetty Course',()=>{


    it('Checkbox example',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');

    })

    it('Dropdown example',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[name="dropdown-class-example"]').select('option2');
    })

    it('Dynamic Dropdown example',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el)=>{
            if($el.text() === 'India')
            {
                cy.wrap($el).click()
            }

        })
    })

    it('Visible and Invisible example',()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');            
            
    })

    it('Radio button example',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[value="radio2"]').check().should('be.checked');
    })

    it('Alert example', () => {
    // Prevent third-party script errors on Rahul Shetty's site from halting execution
    Cypress.on('uncaught:exception', () => false);

    let alertStub;

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/', {
      onBeforeLoad(win) {
        // Replace window.alert before any site scripts execute
        alertStub = cy.stub(win, 'alert').as('alertStub');
      }
    });

    // Click the alert button
    cy.get('#alertbtn').click();

    // Verify the alert content
    cy.get('@alertStub').should(
      'have.been.calledWith',
      'Hello , share this practice page and share your knowledge'
    );
  });
    
    it('Confirm example',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/',
            {
                onBeforeLoad(win){
                    cy.stub(win,'confirm').as('confirmStub');
                }
            }
        );
        cy.get('#confirmbtn').click({force : true})
        // cy.on('window:confirm',(str)=>{
        //     expect(str).to.equal('Hello , Are you sure you want to confirm?');
        // })
        cy.get('@confirmStub').should('have.been.calledWith', 'Hello , Are you sure you want to confirm?') })

        it('Child window example',()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            cy.get('#opentab').invoke('removeAttr','target').click();
            cy.url().should('include','rahulshettyacademy.com');
        }) 
    
})