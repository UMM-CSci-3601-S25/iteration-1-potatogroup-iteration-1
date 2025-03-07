import { Lobby } from 'src/app/host/lobby';

export class AddLobbyPage {

  private readonly url = '/host/new';
  private readonly title = '.add-lobby-title';
  private readonly button = '[data-test=confirmAddLobbyButton]';
  private readonly snackBar = '.mat-mdc-simple-snack-bar';
  private readonly lobbyNameFieldName = 'lobbyName';
  private readonly formFieldSelector = 'mat-form-field';
  private readonly dropDownSelector = 'mat-option';

  navigateTo() {
    return cy.visit(this.url);
  }

  getTitle() {
    return cy.get(this.title);
  }

  addLobbyButton() {
    return cy.get(this.button);
  }

  selectMatSelectValue(select: Cypress.Chainable, value: string) {
    // Find and click the drop down
    return select.click()
      // Select and click the desired value from the resulting menu
      .get(`${this.dropDownSelector}[value="${value}"]`).click();
  }

  getFormField(fieldName: string) {
    return cy.get(`${this.formFieldSelector} [formcontrolname=${fieldName}]`);
  }

  getSnackBar() {
    // Since snackBars are often shown in response to errors,
    // we'll add a timeout of 10 seconds to help increase the likelihood that
    // the snackbar becomes visible before we might fail because it
    // hasn't (yet) appeared.
    return cy.get(this.snackBar, { timeout: 10000 });
  }

  addLobby(newLobby: Lobby) {
    this.getFormField(this.lobbyNameFieldName).type(newLobby.lobbyName);
    return this.addLobbyButton().click();
  }
}
