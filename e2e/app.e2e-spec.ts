import { LocalStoragePage } from './app.po';

describe('local-storage App', () => {
  let page: LocalStoragePage;

  beforeEach(() => {
    page = new LocalStoragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
