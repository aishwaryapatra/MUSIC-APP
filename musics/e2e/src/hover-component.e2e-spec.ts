import { HoverPage } from './hover-component.po';
import { element, by, browser } from 'protractor';
describe('HOVER TEST', () => {
  let page:  HoverPage;
  beforeEach(() => {
    page = new  HoverPage();
    browser.waitForAngularEnabled(false);
    browser.get('hover');
    browser.sleep(10000);


  });
//   
it('should check img in search page', () => {
         page.navigateToHover();
    
         expect(page.isimgPresent()).toBe(true);
       });


       
});