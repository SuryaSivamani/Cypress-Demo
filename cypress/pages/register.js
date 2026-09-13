class registerPage{

    firstName = '#customer\\.firstName';
    lastName = '#customer\\.lastName';
    address = '#customer\\.address\\.street';
    city = '#customer\\.address\\.city';
    state = '#customer\\.address\\.state';
    zipCode = '#customer\\.address\\.zipCode';
    phone = '#customer\\.phoneNumber';
    ssn = '#customer\\.ssn';
    username = '#customer\\.username';
    password = '#customer\\.password';
    confirmPassword = '#repeatedPassword';
    register = '//input[@value="Register"]';

     visit(url) {
        cy.visit(url);
    }

    enterFirstName(name)
    {
        cy.get(this.firstName).type(name);
    }

    enterLastName(name)
    {
        cy.get(this.lastName).type(name);
    }

    enterAddress(address)
    {
        cy.get(this.address).type(address);
    }

    enterCity(city)
    {
        cy.get(this.city).type(city);
    }

    enterState(state)
    {
        cy.get(this.state).type(state);
    }

    enterZipCode(zipCode)
    {
        cy.get(this.zipCode).type(zipCode);
    }

    enterPhone(phone)
    {
        cy.get(this.phone).type(phone);
    }

    enterSSN(ssn)
    {
        cy.get(this.ssn).type(ssn);
    }

    enterUsername(username)
    {
        cy.get(this.username).type(username);
    }

    enterPassword(password)
    {
        cy.get(this.password).type(password);
    }

    enterConfirmPassword(confirmPassword)
    {
        cy.get(this.confirmPassword).type(confirmPassword);
    }

    clickRegister()
    {
        cy.xpath(this.register).click();
    }

}

export default registerPage;
