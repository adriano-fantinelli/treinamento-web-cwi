const el = require('./elements').ELEMENTS;

class Category {
    validarAcessoACategoria(category) {
        cy.get(el.breadcrumb).should('contain.text', `${ category }`);
    }
}

export default new Category();