import { faker } from '@faker-js/faker';
import homePageActions from '../../support/pages/home/homePageActions';
import loginPageActions from '../../support/pages/login/loginPageActions';

describe('Search', () => {
    const homePage = new homePageActions();
    const invalidProduct = faker.word.words({ count: 5 });
    const validProduct = "carne";
    const url = 'https://biodog.es/';

    it('seach a valid product', () => {
        cy.visit(url);
        homePage.setSearchInput(validProduct);
        homePage.verifyResultConstainsKeywordDisplayed(validProduct)
        homePage.verifyResultsDisplayed('.above', 1);
        homePage.verifySearchTitleIsDisplayed("Resultado de la búsqueda")
    });  

    it('seach an invalid product', () => {
        cy.visit(url);
        homePage.setSearchInput(invalidProduct);
        homePage.verifySearchTitleIsDisplayed("Resultados de búsqueda")
        homePage.verifyResultsDisplayed('',0);
        homePage.verifyErrorMessageIsDisplayed("No post to display. Please create post !")
    });
     
})