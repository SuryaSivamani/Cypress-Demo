describe("saucedemo ",() => {
    it('Navigate to saucedemo homepage',()=>{
        cy.visit('https://www.saucedemo.com/');
    })

    it('Sign Up to saucedemo homepage',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    })

    it('Sign Up to saucedemo homepage',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.on('window:confirm', () => true);

        cy.xpath('//div[text()="Sauce Labs Backpack"]').then(($el) => {
            const product1 = $el.text();
            cy.log(product1);
            cy.get('#add-to-cart-sauce-labs-backpack').click(); 
        })

        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        cy.get('.shopping_cart_link').click();

    })
}
)

