/// <reference types="Cypress" />

import DeletarUsuarioElements from '../elements/DeletarUsuarioElements'
import VisualizarUsuarioElements from '../elements/VisualizarUsuarioElements'
const deletarUsuarioElements = new DeletarUsuarioElements
const visualizarUsuarioElements = new VisualizarUsuarioElements

class DeletarUsuarioPage {

    acessarAmbientePesquisaUsuario() {
        cy.visit('/bootstrap-v4')
    }

    preencherCampoCustomerName() {
        visualizarUsuarioElements.campoCustomerName().type('João Marcos dos Santos');
    }

    visualizarUsuarioPesquisado() {
        cy.contains('João Marcos dos Santos').should('be.visible');
    }

    selecionarUsuarioPesquisado() {
        deletarUsuarioElements.botaoSelecaoActions().click();
    }

    deletarUsuario() {
        deletarUsuarioElements.botaoDeletar().click();
    }

    visualizarMensagemDelete() {
        cy.contains('Are you sure that you want to delete this 1 item?').should('be.visible');
    }

    confirmarDelete() {
        deletarUsuarioElements.botaoConfirmarDelete().click();
    }

    visualizarConfirmacaoDelete() {
        cy.contains('Your data has been successfully deleted from the database.').should('be.visible');
    }

}

export default DeletarUsuarioPage
