/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProjectListPage {
  public get inputProject() {
    return $('input[data-testid="project-input-text"]');
  }

  public get startButton() {
    return $("button=START");
  }

  public get projectList() {
    return $("#projects-list");
  }

  /**
   * Adds a project with name.
   *
   * @param {string} name the name for the project.
   * @memberof ProjectListPage
   */
  public async addProject(name: string) {
    await this.inputProject.setValue(name);
    await this.startButton.waitForClickable();
    await this.startButton.click();
  }

  /**
   * Navigate to home page.
   */
  public open() {
    return browser.url("/");
  }
}

const projectListPage = new ProjectListPage();
export default projectListPage;
