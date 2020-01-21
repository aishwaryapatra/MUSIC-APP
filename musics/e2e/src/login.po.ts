import { browser, by, element, ElementFinder, promise } from 'protractor';

export class LoginPage
{
    navigateToLogin()
    {
       return browser.get('/login');
    }
  
    getloginComponent():ElementFinder
    {
        return element(by.tagname('app-login'));
    }
     isEmailInputBoxPresent():ElementFinder
     {
        return element(by.className('email'));
     }
     ispasswordInputBoxPresent():ElementFinder
     {
        return element(by.className('password'));
     }
    // getMockLoginDetail(): any {
    //     const loginDetail: any = { email: 'stranger@gmail.com', password : 'password'};
    //     return loginDetail;
    //   }
      Email():promise.Promise<boolean>
      {
         return this.isEmailInputBoxPresent().isPresent();
      }
      Password():promise.Promise<boolean>
      {
         return this.ispasswordInputBoxPresent().isPresent();
      }

      isSubmitButtonPresent()
      {
          return element(by.className('design'));
      }
      clickSubmitButton(): promise.Promise<void> {
        return this.isSubmitButtonPresent().click();
      }

      getLoginInputBoxesDefaultValues(): any {
        let inputEmail, inputPassword;
        inputEmail = this.isEmailInputBoxPresent().getAttribute('value');
        inputPassword = this.ispasswordInputBoxPresent().getAttribute('value');
        return Promise.all([inputEmail, inputPassword]).then( (values) => {
          return values;
        });
    }
    //     addLoginValues(): any {
    //         const login: any = this.getMockLoginDetail();
    //         this.isEmailInputBoxPresent().sendKeys(login.email);
    //         this.ispasswordInputBoxPresent().sendKeys(login.password);
    //         return Object.keys(login).map(key => login[key]);
          
    //   }

}
