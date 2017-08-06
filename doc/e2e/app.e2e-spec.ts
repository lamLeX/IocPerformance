import { DocPage } from './app.po';

describe('doc App', () => {
  let page: DocPage;

  beforeEach(() => {
    page = new DocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
