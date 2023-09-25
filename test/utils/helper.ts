class TestHelpers {
  async waitForElementToDisplayed(element: WebdriverIO.Element, timeout = 20000) {
    await element.waitForDisplayed({ timeout });
  }
}
export default new TestHelpers();
