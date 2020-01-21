import { RegisterPage } from './register.po';

describe('register page', () => {
    let page: RegisterPage;
  
    beforeEach(() => {
      page = new RegisterPage();
    });

    it('should get email input box', () => {
        page.navigateToRegister();
        expect(page.getEmailTextBox())
        .toBeTruthy(` <input type="email" class="email" formControlName="email" class="form-control a" MatInput [formControl]="email" /> should exist in resgistration-component.component.html`);
      });

      it('should get password input box', () => {
        page.navigateToRegister();
        expect(page.getPasswordTextBox())
        .toBeTruthy(` <input type="password" class="password" formControlName="password" class="form-control a" MatInput
        [formControl]="password" /> should exist in resgistration-component.component.html`);
      });
      it('should get firstName input box', () => {
        page.navigateToRegister();
        expect(page.getFirstNameTextBox())
        .toBeTruthy(` <input type="text" class="firstName" formControlName="firstName" class="form-control a" MatInput
        [formControl]="firstName" /> should exist in resgistration-component.component.html`);
      });
      it('should get lastName input box', () => {
        page.navigateToRegister();
        expect(page.getLastNameTextBox())
        .toBeTruthy(`  <input type="text" class="lastName" formControlName="lastName" class="form-control a" MatInput
        [formControl]="lastName" /> should exist in resgistration-component.component.html`);
      });
      it('should get submit button', () => {
        page.navigateToRegister();
        expect(page.isSubmitButtonPresent()).toBeTruthy(`<button [disabled]="!registerForm.valid" class="btn btn-primary design">Sign Me Up! <i class="fa fa-sign-in"
        aria-hidden="true"></i></button> should
          exist in resgistration.component.html`);
      });
      it('default values of email,firstName,lastName and password should be empty', () => {
        const emptyRegisterValues = ['','','',''];
        page.navigateToRegister();
        expect(page.getRegisterInputBoxesDefaultValues()).toEqual(emptyRegisterValues, 'Default values for email,firstName,lastName and password should be empty');
      });
})