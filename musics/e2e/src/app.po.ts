import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  getHeader(): ElementFinder {
    return element(by.css('nav'));
  }

  isHeaderPresent(): promise.Promise<boolean> {
    return this.getHeader().isPresent();
  }
  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
