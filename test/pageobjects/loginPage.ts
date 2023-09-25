class LoginPage {
  /**
   * define selectors using getter methods
   */
  get clickOnLogin() {
    return $('//XCUIElementTypeButton[@name="Login"]');
  }

  get enterEmail() {
    return $("~input-email");
  }

  get enterPassword() {
    return $("~input-password");
  }

  get loginBtn() {
    return $('(//XCUIElementTypeOther[@name="LOGIN"])[2]');
  }

  get loginDailogBox() {
    return $("~You are logged in!");
  }

  get loginOk() {
    return $("~OK");
  }

  get goToForm() {
    return $("~Forms");
  }

  get inputFieldForm() {
    return $("~text-input");
  }

  youHaveTyped(text: string) {
    return $(`~Input field: You have typed: ${text}`);
  }

  get switch() {
    return $("~switch");
  }
  get switchText() {
    return $("~switch-text");
  }
  get dropdownArrow() {
    return $("//XCUIElementTypeTextField[@value='Select an item...']");
  }

}


export default new LoginPage();
