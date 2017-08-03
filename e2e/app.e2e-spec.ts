import { CornerTestingAppPage } from './app.po';

describe('corner-testing-app App', () => {
  let page: CornerTestingAppPage;

  beforeEach(() => {
    page = new CornerTestingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
