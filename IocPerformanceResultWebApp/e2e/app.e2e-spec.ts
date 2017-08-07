import { IocPerformanceResultWebAppPage } from './app.po';

describe('ioc-performance-result-web-app App', () => {
  let page: IocPerformanceResultWebAppPage;

  beforeEach(() => {
    page = new IocPerformanceResultWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
