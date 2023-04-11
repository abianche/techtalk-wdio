import ProjectListPage from "../pageobjects/projectList.page";

describe("Add a project", () => {
  // beforeEach(async () => {
  //   await browser.pause(3000);
  // });

  // afterEach(async () => {
  //   await browser.pause(3000);
  // });

  it("should navigate to the app", async () => {
    await ProjectListPage.open();
  });

  it("should add a project", async () => {
    await ProjectListPage.addProject("Artificial Intelligence");
  });

  it("verify the project has been added as last", async () => {
    const lastProject = await ProjectListPage.projectList.$(".card:last-child");
    expect(lastProject).toHaveText("Artificial Intelligence");
  });

  it("should mark the first project as done", async () => {
    const firstProject = await ProjectListPage.projectList.$(
      ".card:first-child"
    );
    await firstProject.$("button[data-testid='project-set-done'").click();
    expect(firstProject).toHaveStyle({ textDecoration: "line-through" });
  });

  it("should remove a specific project", async () => {
    let dbProject = await ProjectListPage.projectList.$(
      "span=Database development"
    );
    await dbProject
      .nextElement()
      .$("button[data-testid='project-remove'")
      .click();

    expect(dbProject).not.toBeDisplayed();
  });
});
