import LoginPagee from "../pageobjects/loginPage.ts";

const LoginPage = new LoginPagee();
class TestHelpers {
  async waitForElementToDisplayed(
    element: WebdriverIO.Element,
    timeout = 20000
  ) {
    await element.waitForDisplayed({ timeout });
  }
  async waitForElementAndClick(element: WebdriverIO.Element, timeout = 20000) {
    await element.waitForDisplayed({ timeout });
    await element.click();
  }

  async getEl(selector: string) {
    const element = await $(selector);
    return element;
  }

  async dragAndDrop() {
    const sourceItems: string[] = LoginPagee.getSourceItems();
    const targetItems: string[] = LoginPagee.getTargetItems();
    for (let i: number = 0; i < sourceItems.length; i++) {
      const sourceItem = await this.getEl(sourceItems[i]);
      const targetItem = await this.getEl(targetItems[i]);
      await driver.execute("gesture: dragAndDrop", {
        sourceId: sourceItem,
        destinationId: targetItem,
      });
      await driver.pause(200);
    }
  }
}
export default new TestHelpers();
