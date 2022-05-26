class LoginForm {
  getTitle() {
    return cy.get("h3");
  }

  getEmailInputField() {
    return cy.get('input[name="email"]');
  }

  getPasswordInputField() {
    return cy.get('input[name="password"]');
  }

  getLoginButton() {
    return cy.get('button[type ="submit"]');
  }

  getForgetPasswordLink() {
    return cy.get('a[href = "/pwreset"]');
  }

  getRegistrationLink() {
    return cy.get('p a[href = "/register/email"]');
  }

  getError() {
    return cy.get(".has-error");
  }

  checkUrl(url) {
    cy.url().should("include", url);
  }

  visit(value) {
    cy.visit(value);
  }

  enterEmail(email) {
    return this.getEmailInputField().clear().type(email);
  }

  enterPassword(password) {
    return this.getPasswordInputField().clear().type(password);
  }

  clickOnTheLoginButton() {
    return this.getLoginButton().click();
  }

  waitForPage() {
    cy.waitUntil(
      () => cy.get('p a[href = "/register/email"]').should("be.visible"),
      {
        timeout: 5000,
      }
    );
  }
}
export default LoginForm;
