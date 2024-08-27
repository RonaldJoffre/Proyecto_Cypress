const TIENDATAB =  '#nav-menu-item-1300 > .menu-link';
//import Common from  '../actions/common_actions'; 
//import TIENDA from '../../support/constants/constants'; 

class Tienda{
    clickTienda(){
      cy.get(TIENDATAB).click()
    }
  }
  
  export default new Tienda();
  
  
  
