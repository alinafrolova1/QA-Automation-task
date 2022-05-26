import LoginForm from "../../Pages/LoginForm";
import CookiesPopup from "../../Pages/CookiesPopUp";
import "cypress-wait-until";

const home = new LoginForm();
const popup = new CookiesPopup();

let data;

context("Login to the site test task", () => {
  before("Create the file which will contain all testing data", () => {
    cy.fixture("loginData").then(($loginData) => {
      data = $loginData;
    });
  });

  it("Open website", () => {
    home.visit(`${data.site_url}/login`);
  });

  it("Wait untill the login page will be loaded", () => {
    home.waitForPage();
  });

  it("Wait until the popup will be appear", () => {
    popup.waitForPopup();
  });

  it("Check the presence of all elements on the current page", () => {
    popup.clickOnAcceptCookiesButton();
  });

  it("Accept all cookies", () => {
    popup.clickOnAcceptCookiesButton();
  });

  it("Wait until the login page will be loaded", () => {
    home.waitForPage();
  });

  it("Enter your credentials", () => {
    home.enterEmail(`${data.login}`);
    home.enterPassword(`${data.password}`);
  });

  it("Verify the url of the site", () => {
    home.checkUrl(`${data.site_url}/login`);
  });

  it("Confirm login to your account", () => {
    home.clickOnTheLoginButton();
    home.checkUrl(`${data.site_url}/product`);
  });
});
