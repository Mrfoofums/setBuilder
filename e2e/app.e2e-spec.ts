import { BboybuilderPage } from './app.po';

describe('bboybuilder App', () => {
  let page: BboybuilderPage;

  beforeEach(() => {
    page = new BboybuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
