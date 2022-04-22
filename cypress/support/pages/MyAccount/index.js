const el = require('./elements').ELEMENTS;

class MyAccount {
     validarLoginRealizadoComSucesso(){
        cy.get(el.account).should('have.text', 'Treinamento CWI');
     }
}

export default new MyAccount();