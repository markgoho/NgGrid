import { NgGridPage } from './app.po';

describe('ng-grid App', () => {
  let page: NgGridPage;

  beforeEach(() => {
    page = new NgGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
