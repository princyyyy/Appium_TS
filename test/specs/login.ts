import LoginPage from "../pageobjects/loginPage.ts";
import helper from "../utils/helper.ts";
import { expect } from "chai";

describe("Demo Application", () => {
  let text: string = "Princyy";

  it.only("Should login successfully", async () => {
    await driver.pause(2000);
    await LoginPage.clickOnLogin.click();
    await LoginPage.enterEmail.setValue("princy@yopmail.com");
    await LoginPage.enterPassword.setValue("Simform@123");
    await browser.hideKeyboard('pressKey', 'Done');
    await LoginPage.loginBtn.click();
    await driver.pause(2000);
    await helper.waitForElementToDisplayed(await LoginPage.loginDailogBox);
    expect(await LoginPage.loginDailogBox.isDisplayed()).to.be.true;
    (await LoginPage.loginOk).click();
    console.log("Login successfull");
  });

  it("should submit form", async () => {
    await driver.pause(2000);
    await LoginPage.goToForm.click();
    await LoginPage.inputFieldForm.setValue(text);
    await driver.pause(2000);
    await browser.hideKeyboard('pressKey', 'Return');
    console.log("Form Submited successfull");
  });
});
