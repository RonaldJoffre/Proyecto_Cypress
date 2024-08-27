import Common from  '../actions/common_actions'; 
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
    Common.visitURL('/mi-cuenta');
});

When('I type a registered email and password to login', () => {     
    Common.loginIntoPage();
});
