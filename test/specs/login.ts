import LoginPagee from "../pageobjects/loginPage.ts";
import helper from "../utils/helper.ts";
import { expect } from "chai";
import { remote } from "webdriverio";

const LoginPage = new LoginPagee();

describe("Demo Application", () => {
  it("Should login successfully", async () => {
    await helper.waitForElementToDisplayed(await LoginPage.clickOnLogin);
    await LoginPage.clickOnLogin.click();
    await LoginPage.enterEmail.setValue("princy@yopmail.com");
    await LoginPage.enterPassword.setValue("Simform@123");
    await browser.hideKeyboard("pressKey", "Done");
    //await LoginPage.loginBtn.click();
    await helper.waitForElementToDisplayed(await LoginPage.loginDailogBox,3000);

    expect(await LoginPage.loginDailogBox.isDisplayed()).to.be.true;
    (await LoginPage.loginOk).click();
    console.log("Login successfull");
  });

  it("should submit form", async () => {
    await helper.waitForElementToDisplayed(await LoginPage.goToForm);
    await LoginPage.goToForm.click();
    await LoginPage.inputFieldForm.setValue(LoginPagee.text);
    expect(await LoginPage.youHaveTyped().isDisplayed()).to.be.true;
    await browser.hideKeyboard("pressKey", "Return");
    await helper.waitForElementAndClick(await LoginPage.clickOnDropdown);
    await LoginPage.dropdownValues.setValue(LoginPagee.randomValue);
    (await LoginPage.clickOnDone).click();
    await helper.waitForElementToDisplayed(await LoginPage.assertDropdown());
    expect(await LoginPage.assertDropdown().isDisplayed()).to.be.true;
  });

  it("Drag and Drop", async () => {
    await helper.waitForElementToDisplayed(await LoginPage.dragMenu);
    await LoginPage.dragMenu.click();
    await driver.pause(1000);
    await helper.dragAndDrop();
    expect(await LoginPage.congratulationsText.isDisplayed()).to.be.true;
  });

  it("Should login successfully with TouchID", async () => {
    await helper.waitForElementToDisplayed(await LoginPage.clickOnLogin);
    await LoginPage.clickOnLogin.click();
    await LoginPage.biomatric.click();
    await driver.pause(2000);
    await driver.touchId(true);
    await helper.waitForElementToDisplayed(await LoginPage.loginDailogBox);
    expect(await LoginPage.loginDailogBox.isDisplayed()).to.be.true;
    const s = await LoginPage.loginDailogBox.getText();
    console.log(s, "fnenfed");
    (await LoginPage.loginOk).click();
    console.log("Login successfull with Touch ID");
  });
});
