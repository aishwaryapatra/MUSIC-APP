import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
export class NewReleasePage {
    navigateTonewrelease() {
        return browser.get('/newrelease');
    }
    ish1Present(): any {
        return this.geth1().isPresent();
    }
    geth1() {
       return element(by.css('h1'));
    }
}

