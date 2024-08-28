import { faker } from '@faker-js/faker';
describe('Login', () => {
    const randomEmail = faker.internet.email();
    const randomUserName = faker.word.sample();
    const randomPassword = faker.word.sample();
    const validEmail = "echo_48@example.com";
    const validPassword = "p@ssw0rd_123."

    it('invalid email + invalid Password', () => {

        cy.visit('https://biodog.es/');
        cy.xpath("//a[text()='Mi Cuenta']").click({force: true});
        cy.get('[id="header"]').find('[href="/mi-cuenta/"]').contains("Mi Cuenta").click({force: true});
        cy.get('[id="username"]').type(randomEmail);
        cy.get('[id="password"]').type(randomPassword);
        cy.xpath("//button[text()='Acceder']").click();
        cy.get('.woocommerce-error').within(() => {
            cy.contains('ERROR').should('be.visible');
            cy.contains('Dirección de correo electrónico no válido.').should('be.visible');
            cy.contains('¿Olvidaste tu contraseña?').should('be.visible');
        });
    })

    it('invalid user name + invalid Password', () => {

        cy.visit('https://biodog.es/');
        cy.xpath("//a[text()='Mi Cuenta']").click({force: true});
        cy.get('[id="username"]').type(randomUserName);
        cy.get('[id="password"]').type(randomPassword);
        cy.get('.woocommerce-button').contains("Acceder").click(); 
        cy.get('.woocommerce-error').within(() => {
            cy.contains('ERROR').should('be.visible');
            cy.contains('Nombre de usuario no válido. ').should('be.visible');
            cy.contains('¿Olvidaste tu contraseña?').should('be.visible');
        });
    })
    it('valid email + invalid Password', () => {

        cy.visit('https://biodog.es/');
        cy.xpath("//a[text()='Mi Cuenta']").click({force: true});
        cy.get('[id="username"]').clear().type(validEmail);
        cy.get('[id="password"]').clear().type(randomPassword);
        cy.get('.woocommerce-button').contains("Acceder").click(); 
        cy.get('.woocommerce-error').within(() => {
            cy.contains('ERROR').should('be.visible');
            cy.contains('La contraseña que has introducido para la dirección de correo electrónico').should('be.visible');
            cy.contains(validEmail).should('be.visible');
            cy.contains(' no es correcta.').should('be.visible');
            cy.contains('¿Olvidaste tu contraseña?').should('be.visible');
        });
    })

    it('valid email + valid Password', () => {

        cy.visit('https://biodog.es/');
        cy.xpath("//a[text()='Mi Cuenta']").click({force: true});
        cy.get('[id="username"]').clear().type(validEmail);
        cy.get('[id="password"]').clear().type(validPassword);
        cy.get('.woocommerce-button').contains("Acceder").click(); 
        cy.get('.title30').contains("Mi cuenta").should('be.visible');
        cy.get('.woocommerce-MyAccount-content').within(() => {
            cy.contains('Hola ').should('be.visible');
            cy.contains('echo_48').should('be.visible');
            cy.contains('Desde el panel de control de tu cuenta puedes ver tus ').should('be.visible');
            cy.contains('pedidos recientes').should('be.visible');
        });
    })
    
})