const el = require('./elements').ELEMENTS;

class MyAccount {
     validarLoginRealizadoComSucesso(textoMyAccount){
        cy.get(el.account).should('have.text', textoMyAccount);
     }
}

export default new MyAccount();