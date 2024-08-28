import homePageObjects from "./homePageObjects";

class homePageActions extends homePageObjects {
    constructor() {
        super();
    }

    clickOnMiCuentaButton() {
        cy.xpath(this.miCuentaButton()).click({force: true});
    }

}

export default homePageActions;
