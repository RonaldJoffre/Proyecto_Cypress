import homePageObjects from "./homePageObjects";

class homePageActions extends homePageObjects {
    constructor() {
        super();
    }

    clickOnMiCuentaButton() {
        cy.xpath(this.miCuentaButton()).click({force: true});
    }

    setSearchInput(value){
        cy.get(this.searchComponentLink()).within(() => {
            cy.get(this.searchButton()).trigger('mouseover').get(this.searchInput()).type(value, {force: true});
            cy.get(this.searchButton()).click();
        });
    }

    verifyResultConstainsKeywordDisplayed(keyword){
        cy.get(this.searchResultsLink()).should('contain.text', keyword);
    }

    verifySearchTitleIsDisplayed(text){
        cy.get(this.searchTitleLink()).should('include.text', text);
    }

    verifyResultsDisplayed(value, result){
        cy.get(this.searchResultsLink()).should(`have.length${value}`, result);
    }

    verifyErrorMessageIsDisplayed(value){
        cy.get(this.errorMessageLink()).should('contain.text', value)
    }
}

export default homePageActions;
