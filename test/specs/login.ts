import LoginPagee from "../pageobjects/loginPage.ts";
import helper from "../utils/helper.ts";
import { expect } from "chai";
const LoginPage = new LoginPagee();

describe("Demo Application", () => {
  it("Should login successfully", async () => {
    await helper.waitForElementToDisplayed(await LoginPage.clickOnLogin);
    await LoginPage.clickOnLogin.click();
    await LoginPage.enterEmail.setValue("princy@yopmail.com");
    await LoginPage.enterPassword.setValue("Simform@123");
    await browser.hideKeyboard("pressKey", "Done");
    await LoginPage.loginBtn.click();
    await helper.waitForElementToDisplayed(await LoginPage.loginDailogBox);
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
    //Select and validate value in dropdown
    await helper.waitForElementAndClick(await LoginPage.clickOnDropdown);
    await LoginPage.dropdownValues.setValue(LoginPagee.randomValue);
    (await LoginPage.clickOnDone).click();
    await helper.waitForElementToDisplayed(await LoginPage.assertDropdown());
    expect(await LoginPage.assertDropdown().isDisplayed()).to.be.true;
  });
});
