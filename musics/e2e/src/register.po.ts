import { browser, by, element, ElementFinder, promise } from 'protractor';

export class RegisterPage
{

    navigateToRegister()
    {
       return browser.get('/register');
    }

    getRegistrationComponent():ElementFinder
    {
        return element(by.tagname('app-resgistration'));
    }

    getEmailTextBox():ElementFinder
    {
       return element(by.className('email'));
    }
    getPasswordTextBox():ElementFinder
    {
       return element(by.className('password'));
    }
    getFirstNameTextBox():ElementFinder
    {
       return element(by.className('firstName'));
    }
    getLastNameTextBox():ElementFinder
    {
       return element(by.className('lastName'));
    }
    isSubmitButtonPresent()
    {
        return element(by.className('design'));
    }
    getRegisterInputBoxesDefaultValues(): any {
        let inputEmail, inputPassword,inputFirst,inputLast;
        inputEmail = this.getEmailTextBox().getAttribute('value');
        inputFirst=this.getFirstNameTextBox().getAttribute('value');
        inputLast = this.getLastNameTextBox().getAttribute('value');
        inputPassword = this.getPasswordTextBox().getAttribute('value');
        return Promise.all([inputEmail, inputPassword,inputFirst,inputLast]).then( (values) => {
          return values;
        });
    }
}