import Common from  '../actions/common_actions'; 

export class CommonAction {
   //Para visitar una URL 
    visitURL(url) {
       cy.visit(url);
    }

    //PAra Logueo en página
    loginIntoPage() {
        Common.visitURL('/mi-cuenta')
        cy.fixture('loginData').then((loginData) => {
            cy.get('#username').type(loginData.email);
            cy.get('#password').type(loginData.password);
          });    
        cy.get('.woocommerce-button').click()
    }
}

export default new CommonAction();