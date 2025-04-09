import { login } from '../helpers/loginHelper.js';
import WorkspacePage from '../../po/pages/WorkspacePage.js';

describe('Workspace Management - Modify workspace details', () => {
  let workspacePage;

  beforeEach(async () => {
    await login();
    workspacePage = new WorkspacePage();
  });

  it('should modify workspace details successfully', async () => {
    const newText = 'WebDriverio from Test';

    // Navegar al workspace y abrir la configuración
    await workspacePage.navigateToWorkspace();
    await workspacePage.openWorkspaceSettings();

    await workspacePage.editWorkspaceDetails(newText);

    const titleText = await workspacePage.getWorkspaceTitle();
    expect(titleText).toBe(newText);
  });
});
