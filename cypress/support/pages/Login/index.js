const el = require('./elements').ELEMENTS;

class Login {
    preencherLogin(email, senha) {
        this.preencherEmail(email)
        this.preencherPassword(senha)
        this.clicarSignIn()
    }

    preencherEmail(email) {
        cy.get(el.email).type(email)
    }

    preencherPassword(senha) {
        cy.get(el.password).type(senha)
    }

    clicarSignIn() {
        cy.get(el.sign_in).click()
    }

    validarMensagemErro(mensagem) {
        cy.get(el.mensagemErro).should('have.text', mensagem)
    }
}

export default new Login();