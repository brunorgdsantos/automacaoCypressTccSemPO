/// <reference types="Cypress" />

import CadastrarUsuarioElements from '../elements/CadastrarUsuarioElements'
const cadastrarUsuarioElements = new CadastrarUsuarioElements
const url = Cypress.config("baseUrl")

class CadastrarUsuarioPage {
    acessarSite() {
        cy.visit(url)
    }

    acessarPaginaCadastroUsuario() {
        cy.visit('/bootstrap-v4')
    }

    clicarAddRecord() {
        cadastrarUsuarioElements.botaoAddRecord().click();
    }

    preencherCampoCustomerName() {
        cadastrarUsuarioElements.campoCustomerName().type('João Santos');
    }

    preencherCampoContactLastName() {
        cadastrarUsuarioElements.campoContactLastName().type('Santos');
    }

    preencherCampoContactFirstName() {
        cadastrarUsuarioElements.campoContactFirstName().type('João');
    }

    preencherCampoPhone() {
        cadastrarUsuarioElements.campoPhone().type('999999999');
    }

    preencherCampoAddressLine1() {
        cadastrarUsuarioElements.campoAddressLine1().type('Rua Epitacio Pessoa');
    }

    preencherCampoAddressLine2() {
        cadastrarUsuarioElements.campoAddressLine2().type('Av. Ruy Carneiro');
    }

    preencherCampoCity() {
        cadastrarUsuarioElements.campoCity().type('João Pessoa');
    }

    preencherCampoState() {
        cadastrarUsuarioElements.campoState().type('Paraíba');
    }

    preencherCampoPostalCode() {
        cadastrarUsuarioElements.campoPostalCode().type('58051000');
    }

    preencherCampoCountry() {
        cadastrarUsuarioElements.campoCountry().type('Brasil');
    }

    preencherCampoSalesRepEmployeeNumber() {
        cadastrarUsuarioElements.campoSalesRepEmployeeNumber().type('120');
    }

    preencherCampoCreditLimit() {
        cadastrarUsuarioElements.campoCreditLimit().type('1000');
    }

    clicarSave() {
        cadastrarUsuarioElements.botaoSave().click();
    }

    visualizarMensagemCadastroSucesso() {
        cy.contains('Your data has been successfully stored into the database').should('be.visible');
    }
}

export default CadastrarUsuarioPage
