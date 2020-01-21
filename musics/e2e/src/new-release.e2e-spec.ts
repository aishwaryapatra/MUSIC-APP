import { NewReleasePage } from './new-release.po';
describe('NEWRELEASE TEST', () => {
  let page:  NewReleasePage;
  beforeEach(() => {
    page = new  NewReleasePage();
    page.navigateTonewrelease();
  });
  it('should check h1 in newrel page', () => {
    page.navigateTonewrelease();
    expect(page.ish1Present()).toBeTruthy('<h1> should exist in newrelease.component.html');
  });
});