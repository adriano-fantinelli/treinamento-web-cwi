/// <reference types="Cypress" />

import {
    homePage,
    categoryPage,
    loginPage,
    myAccountPage
} from '../support/pages'

describe('Fluxos do ecommerce', () => {
    categoryPage.CATEGORIES.forEach(category => {
        it(`acessar categoria ${category}`, () => {
            homePage.acessarCategoria(category);
            categoryPage.validarAcessoACategoria(category)
        });
    });

    it('realizar login', () => {
        homePage.acessarLogin();
        loginPage.preencherLogin();
        myAccountPage.validarLoginRealizadoComSucesso()
    });

});