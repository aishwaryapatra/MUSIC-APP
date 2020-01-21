import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
export class HoverPage {
    navigateToHover() {
        return browser.get('/hover');
    }
    ismatPresent(): any {
        return this.getmat().isPresent();
    }
    getmat() {
       return element(by.tagName('mat-toolbar'));
    }
    isimgPresent(): any {
        return this.getimg().isPresent();
    }
    getimg() {
        return element(by.css('img'));
    
    }
}