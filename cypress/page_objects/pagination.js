const DROPDOWN  =  "//a[@class='dropdown-link']";
const DROPDOWN_LIST = "//ul[@class='dropdown-list list-none']";
const DROPDOWN_ITEM9 = "//a[normalize-space()='9']";
const DROPDOWN_ITEM10 = "//a[normalize-space()='10']";
const DROPDOWN_ITEM12 = "//a[normalize-space()='12']";
const DROPDOWN_ITEM18 = "//a[normalize-space()='18']";
const DROPDOWN_ITEM24 = "//a[normalize-space()='24']";

class Pagination{
    visit(){
      cy.visit('/tienda/')
    }

    item9(){
      cy.xpath(DROPDOWN).realHover();
      cy.wait(1000); 
      cy.xpath(DROPDOWN_LIST).should('be.visible');
      cy.xpath(DROPDOWN_ITEM9).should('be.visible');
      cy.xpath(DROPDOWN_ITEM9).then($el => {
        const url = $el.attr('href');
        cy.visit(url);
      });
    }

    item10(){
      cy.xpath(DROPDOWN).realHover();
      cy.wait(1000); 
      cy.xpath(DROPDOWN_LIST).should('be.visible');
      cy.xpath(DROPDOWN_ITEM10).should('be.visible');
      cy.xpath(DROPDOWN_ITEM10).then($el => {
        const url = $el.attr('href');
        cy.visit(url);
      });      
    }

    item12(){
      cy.xpath(DROPDOWN).realHover();
      cy.wait(1000); 
      cy.xpath(DROPDOWN_LIST).should('be.visible');
      cy.xpath(DROPDOWN_ITEM12).should('be.visible');
      cy.xpath(DROPDOWN_ITEM12).then($el => {
        const url = $el.attr('href');
        cy.visit(url);
      });      
    }

    item18(){
      cy.xpath(DROPDOWN).realHover();
      cy.wait(1000); 
      cy.xpath(DROPDOWN_LIST).should('be.visible');
      cy.xpath(DROPDOWN_ITEM18).should('be.visible');
      cy.xpath(DROPDOWN_ITEM18).then($el => {
        const url = $el.attr('href');
        cy.visit(url);
      });      
    }

    item24(){
      cy.xpath(DROPDOWN).realHover();
      cy.wait(1000); 
      cy.xpath(DROPDOWN_LIST).should('be.visible');
      cy.xpath(DROPDOWN_ITEM24).should('be.visible');
      cy.xpath(DROPDOWN_ITEM24).then($el => {
        const url = $el.attr('href');
        cy.visit(url);
      });      
    }     

  }  
  
export default new Pagination();