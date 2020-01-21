import { PlaylistAlbumsPage } from './playlist-albums.po';
describe('PLAYLISTALBUMS TEST', () => {
  let page:  PlaylistAlbumsPage;
  beforeEach(() => {
    page = new  PlaylistAlbumsPage();
    page.navigateToPlayListAlbums();
  });
//   it('should check h1 in PlaylistAlbums page', () => {
//     page.navigateToPlayListAlbums();
//     expect(page.getAppComponent()).toEqual(true);
//   });
});