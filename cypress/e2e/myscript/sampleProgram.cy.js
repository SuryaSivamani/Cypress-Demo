describe("saucedemo ",() => {
    let product1;
    let product2;
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
            product1 = $el.text();
            cy.log(product1);
            cy.get('#add-to-cart-sauce-labs-backpack').click(); 
        })

        cy.xpath('//div[text()="Sauce Labs Bolt T-Shirt"]').then(($el) =>
        {
            product2 = $el.text();
            cy.log(product2);
            cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        })
    
        cy.get('.shopping_cart_link').click();
         cy.get('[data-test="checkout"]').click();
         cy.get('[data-test="firstName"]').type('Test');
         cy.get('[data-test="lastName"]').type('test');
         cy.get('[data-test="postalCode"]').type('12345');
         cy.get('[data-test="continue"]').click();
         
         cy.xpath('//div[text()="Sauce Labs Bolt T-Shirt"]').then((actualName) => {
            expect(actualName.text()).to.equal(product2);
         })
         cy.xpath('//div[text()="Sauce Labs Backpack"]').then((acutalName)=> {
            expect(acutalName.text()).to.equal(product1);
         })
    })

    it('Add random 5 products and assert them', () => {

    const products = [];

    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.inventory_item').each(($product, index) => {

        products.push({
            index: index,
            name: $product.find('.inventory_item_name').text().trim()
        });

    }).then(() => {

        // Create random indexes
        const randomIndexes = [];

        while (randomIndexes.length < 5) {

            const randomNum = Math.floor(
                Math.random() * products.length
            );

            if (!randomIndexes.includes(randomNum)) {
                randomIndexes.push(randomNum);
            }
        }

        // Add random products to cart
        randomIndexes.forEach((index) => {

            const product = products[index];

            cy.get('.inventory_item')
                .eq(product.index)
                .find('button')
                .click();

        });

        // Go to cart
        cy.get('.shopping_cart_link').click();

        // Verify selected products
        randomIndexes.forEach((index) => {

            const productName = products[index].name;

            cy.get('.inventory_item_name')
                .should('contain', productName);

        });

    });
});
})