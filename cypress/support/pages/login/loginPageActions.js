import loginPageObjects from "./loginPageObjects";

class loginPageActions extends loginPageObjects {
    constructor() {
        super();
    }

    setUserNameInput(user) {
        cy.get(this.usernameInput()).type(user);
    }
    setPasswordInput(password) {
        cy.get(this.passwordInput()).type(password);
    }

}

export default loginPageActions;
