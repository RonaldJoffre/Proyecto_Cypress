const EMAIL = '#reg_email';
const PASSWORD = '#reg_password';
const REGISTER_BUTTON = '#customer_login > div.u-column2.col-2 > form > p.woocommerce-FormRow.form-row > button';

class Register{

visit(){
    cy.visit('/');
}

registerUserName(username)
{
    cy.get(EMAIL).type(username);
}

registerPassword(password)
{
    cy.get(PASSWORD).type(password);
}

clickRegisterButton()
{
    cy.get(REGISTER_BUTTON).click();
}

}

export default new Register();