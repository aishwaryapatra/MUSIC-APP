import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
export class RecommendationPage {
    navigateToRecommendation() {
        return browser.get('/recommendation');
    }
    ish1Present(): any {
        return this.geth1().isPresent();
    }
    geth1() {
       return element(by.css('badge badge-secondary'));
    }
}