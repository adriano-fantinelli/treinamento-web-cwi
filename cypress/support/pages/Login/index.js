const el = require('./elements').ELEMENTS;

class Login {
     preencherLogin(email, senha) {
         cy.get(el.email).type(email)
         cy.get(el.password).type(senha)
         cy.get(el.sign_in).click()
     }

}

export default new Login();