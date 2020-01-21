import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
export class SearchPage {
    navigateToSearch() {
        return browser.get('/search');
    }
    ish2Present(): any {
        return this.geth2().isPresent();
    }
    geth2() {
       return element(by.css('h2'));
    }
    isimgPresent(): any {
        return this.getimg().isPresent();
    }
    getimg() {
        return element(by.css('img'));
    
    }
}