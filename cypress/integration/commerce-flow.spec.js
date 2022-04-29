/// <reference types="Cypress" />

import {
    homePage,
    categoryPage,
    loginPage,
    myAccountPage
} from '../support/pages'
import categoriesFixture  from '../fixtures/categories.json'
import loginFixture from '../fixtures/login.json'

describe('Fluxos do ecommerce', () => {
    categoriesFixture.categories.forEach(category => {
        it(`acessar categoria ${category}`, () => {
            homePage.acessarCategoria(category);
            categoryPage.validarAcessoACategoria(category)
        });
    });

    it('realizar login', () => {
        homePage.acessarLogin();
        loginPage.preencherLogin(loginFixture.dadosUsuario.email, loginFixture.dadosUsuario.senha);
        myAccountPage.validarLoginRealizadoComSucesso(loginFixture.dadosUsuario.nome)
    });

});