import registerPage from '../../pages/register.js';

describe (' Register',() =>{

     beforeEach(() => {
            cy.visit('/');
            cy.contains('Register').click();
        });

    it('Navigate to the register page',() => {

        const register = new registerPage();
        console.log(registerPage);

        
        register.enterFirstName('Surya');
        register.enterLastName('Sivamani');
        register.enterAddress('123, 1st street');
        register.enterCity('New York');
        register.enterState('NY');
        register.enterZipCode('10001');
        register.enterPhone('1234567890');
        register.enterSSN('123-45-6789');
        register.enterUsername('surya1234');
        register.enterPassword('Test@1234');
        register.enterConfirmPassword('Test@1234');
        register.clickRegister();
      
    })
})