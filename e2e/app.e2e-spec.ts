import { ProjectPOesPage } from './app.po';

describe('project-p-oes App', function() {
  let page: ProjectPOesPage;

  beforeEach(() => {
    page = new ProjectPOesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
