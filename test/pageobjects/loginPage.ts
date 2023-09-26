class LoginPage {
  /**
   * define selectors using getter methods
   */
  static values: string[] = [
    "webdriver.io is awesome",
    "Appium is awesome",
    "This app is awesome",
  ];
  static randomValue =
    LoginPage.values[Math.floor(Math.random() * LoginPage.values.length)];
  static text: string = "Princyy";
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

  youHaveTyped() {
    return $(`~Input field: You have typed: ${LoginPage.text}`);
  }

  get switch() {
    return $("~switch");
  }

  get switchText() {
    return $("~switch-text");
  }

  get dropdownValues() {
    return $("XCUIElementTypePickerWheel");
  }
  get clickOnDropdown() {
    return $("//XCUIElementTypeTextField[@name='text_input']");
  }

  assertDropdown() {
    return $(`//XCUIElementTypeTextField[@value='${LoginPage.randomValue}']`);
  }
  get clickOnDone() {
    return $("//XCUIElementTypeOther[@label='Done' and @accessible='true']");
  }
  get activeBtn() {
    return $("//XCUIElementTypeOther[@name='Active']");
  }
}

export default LoginPage;
