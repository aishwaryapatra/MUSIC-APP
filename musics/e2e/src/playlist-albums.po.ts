import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
export class PlaylistAlbumsPage {
    navigateToPlayListAlbums() {
        return browser.get('/playlistalbums');
    }
    getAppComponent() {
        return element(by.css('h1'));
      }
      
    ish1Present(): any {
        return this.getAppComponent().isPresent();
    }
    // geth1() {
    //    return element(by.css('h1'));
    // }
}
