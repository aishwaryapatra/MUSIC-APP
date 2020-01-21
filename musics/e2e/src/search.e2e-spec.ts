import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { SearchPage } from './search.po';
describe('SEARCH TEST', () => {
  let page:  SearchPage;
  beforeEach(() => {
    page = new  SearchPage();
    // page.navigateToSearch();
  });
  it('should check heading in search page', () => {
    page.navigateToSearch();
    expect(page.ish2Present()).toBeTruthy('<h2> should exist in search.component.html');
  });

});