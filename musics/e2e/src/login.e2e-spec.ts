import { LoginPage } from './login.po';

describe('login page', () => {
    let page: LoginPage;
  
    beforeEach(() => {
      page = new LoginPage();
    });

    it('should get email input box', () => {
        page.navigateToLogin();
        expect(page.isEmailInputBoxPresent())
        .toBeTruthy(`<input class="email" matInput [formControl]='email'> should exist in login.component.html`);
      });


    it('should get password input box', () => {
        page.navigateToLogin();
        expect(page.ispasswordInputBoxPresent())
        .toBeTruthy(`<input class="password" matInput [formControl]='password'> should exist in login.component.html`);
      });

      it('should get submit button', () => {
        page.navigateToLogin();
        expect(page.isSubmitButtonPresent()).toBeTruthy(`<button [disabled]="loading" class="btn btn-primary design">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button> should
          exist in login.component.html`);
      });
      it('default values of email and password should be empty', () => {
        const emptyLoginValues = ['', ''];
        page.navigateToLogin();
        expect(page.getLoginInputBoxesDefaultValues()).toEqual(emptyLoginValues, 'Default values for email and password should be empty');
      });

    //   it('should login into the system', () => {
    //     page.navigateToLogin();
    //     let newNoteValues = page.addLoginValues();
    //     expect(page.getLoginInputBoxesDefaultValues()).toEqual(newNoteValues, 'Should be able to set values for username and password');
    //     page.clickSubmitButton();
    //     page.navigateToNoteView();
    //     page.getCurrentURL().then((url) => {
    //       if (url.indexOf('login') > -1) {
    //         newNoteValues = page.addLoginValues();
    //         page.clickSubmitButton();
    //         page.navigateToNoteView();
    //         expect(page.getCurrentURL()).toContain('dashboard/view/noteview', 'Should navigate to note view dashboard');
    //       } else {
    //         expect(page.getCurrentURL()).toContain('dashboard/view/noteview', 'Should navigate to note view dashboard');
    //       }
    //     });
    //   });


    })