const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')
//const neatCSV = require('neat-csv')

/*let table;
    before(() => {
        cy
          .fixture('/data.csv')
          .then(neatCSV)
          .then(data => {
            table = data;
          })
      })*/

function getRandomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz' 
    const randomIndex = Math.floor(Math.random() * letters.length)
    return letters[randomIndex]
}

function getGenerateUser()
{

}
/*beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  })*/

//--------------register
Given('I open the home page 1', () => {
    cy.visit('/mi-cuenta')
});
Then('the title should be {string}', (title) => {
    cy.title().should('eq', title)
});
When('I type an email', () => {    
    const firstLetter = getRandomLetter()
    const secondLetter = getRandomLetter()
    userName = 'user_' + firstLetter + secondLetter
    userPassword = userName +'.123' 
    email = userName + '@test.com'     
    cy.get('#reg_email').type(email)
    console.log(email)
});

When('I type the password', () => {
    cy.get('#reg_password').type(userPassword);   
});
When('I click on Register button', () => {
    cy.get('#customer_login > div.u-column2.col-2 > form > p.woocommerce-FormRow.form-row > button').click()
});
Then('the user name should be displayed', () => {
    cy.contains("test_email1322").should('be.visible')
});


//--------------- Login 
When('I type a registered email to login', () => {          
    cy.get('#username').type("test_email1322@gmail.com")
});
When('I type the login password', () => {
    cy.get('#password').type("Pass1234.1313")
});
When('I click on Acceder button', () => {
    cy.get('.woocommerce-button').click()
});


//------------- seleccionar un producto
Given('I am logged into the page', () => {
    cy.visit('/mi-cuenta')
    cy.get('#username').type(email)
    cy.get('#password').type(userPassword)
    cy.get('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > button').click()
});

When('I select the tienda tab22', () => {
    cy.get('#nav-menu-item-1ccc300 > .menu-link').click()
});

When('I select a product', () => {
cy.get('.product-info').then($divs => {
    numberOfElements = $divs.length;
    if (numberOfElements > 0) {
        // índice aleatorio
        const randomIndex = Math.floor(Math.random() * numberOfElements)
        // div en el índice aleatorio
        const randomDiv = $divs.eq(randomIndex);
      cy.wrap(randomDiv).click()

    } else {
        throw new Error('No se encontraron divs con el selector especificado.');
    }
})
});

Then('the product detail is displayed', () => {
    cy.contains('FORMATO').should('be.visible')
});
     

// Oultline plano
When('I type {string} email', (email) => {    
    cy.get('#reg_email').type(email)
});

When('I type the password {string}', (password) => {
    cy.get('#reg_password').type(password);   
});

Then('the displayed user name from the {string} should be visible', (email) => {
    const parts = email.split('@')
    username = parts[0];
    cy.contains(username).should('be.visible')
});

// desde csv
When('I register users fromn CSV', () => {
    console.log(table[1]['email'])    
});

