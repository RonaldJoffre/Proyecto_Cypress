class LoginPage{
  visit(){
    cy.visit('/mi-cuenta')
  }
}

export default new LoginPage();