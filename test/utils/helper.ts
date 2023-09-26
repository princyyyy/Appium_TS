class TestHelpers {
  async waitForElementToDisplayed(element: WebdriverIO.Element, timeout = 20000) {
    await element.waitForDisplayed({ timeout });
  }
  async waitForElementAndClick(element: WebdriverIO.Element, timeout = 20000) {
    await element.waitForDisplayed({ timeout });
    await element.click();
  }
}
export default new TestHelpers();
