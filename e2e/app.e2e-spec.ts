import { MediumSamplePage } from './app.po';

describe('medium-sample App', function() {
  let page: MediumSamplePage;

  beforeEach(() => {
    page = new MediumSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
