import { Ng2FileDroppaPage } from './app.po';

describe('ng2-file-droppa App', () => {
  let page: Ng2FileDroppaPage;

  beforeEach(() => {
    page = new Ng2FileDroppaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
