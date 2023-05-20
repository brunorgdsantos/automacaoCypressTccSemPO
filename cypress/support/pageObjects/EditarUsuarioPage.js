/// <reference types="Cypress" />

import EditarUsuarioElements from '../elements/EditarUsuarioElements'
import CadastrarUsuarioElements from '../elements/CadastrarUsuarioElements'
const editarUsuarioElements = new EditarUsuarioElements
const cadastrarUsuarioElements = new CadastrarUsuarioElements

class EditarUsuarioPage {

    acessarAmbientePesquisaUsuario() {
        cy.visit('/bootstrap-v4')
    }

    clicarEdit() {
        cy.contains('João Santos').should('be.visible');
        editarUsuarioElements.botaoEdit().click();
    }

    preencherCampoCustomerName() {
        cadastrarUsuarioElements.campoCustomerName().clear().type('João Marcos dos Santos');
    }

    clicarUpdateChanges() {
        editarUsuarioElements.botaoUpdateChanges().click();
    }

    visualizarMensagemEditadoSucesso() {
        cy.contains('Your data has been successfully updated').should('be.visible');
    }

}

export default EditarUsuarioPage
