class CookiesPopup {

  waitForPopup() {
    cy.waitUntil(
      () => cy.get("#onetrust-accept-btn-handler").should("be.visible"),
      {
        timeout: 5000,
      }
    );
    }
    
  getAcceptCookiesButton() {
    return cy.get("#onetrust-accept-btn-handler");
  }

  clickOnAcceptCookiesButton() {
    return this.getAcceptCookiesButton().click();
  }
}
export default CookiesPopup;
