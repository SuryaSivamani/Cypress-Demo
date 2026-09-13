class loginPage {  

    username = '//input[@name="username"]';
    password = '//input[@name="password"]';
    loginButton = '//input[@value="Log In"]';

    visit(url) {
        cy.visit(url);
    }

    loginExistingUser(name, password) {
        cy.xpath(this.username).type(name);
        cy.xpath(this.password).type(password);
        cy.xpath(this.loginButton).click();
    }
}

export default loginPage;