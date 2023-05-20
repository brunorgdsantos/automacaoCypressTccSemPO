/// <reference types="Cypress" />

import VisualizarUsuarioElements from '../elements/VisualizarUsuarioElements'
const visualizarUsuarioElements = new VisualizarUsuarioElements

class VisualizarUsuarioPage {

    acessarAmbientePesquisaUsuario() {
        cy.visit('/bootstrap-v4')
    }

    preencherCampoCustomerName() {
        visualizarUsuarioElements.campoCustomerName().type('João Santos');
    }

    visualizarUsuarioCadastrado() {
        cy.contains('João Santos').should('be.visible');
        cy.contains('999999999').should('be.visible');
        cy.contains('Rua Epitacio Pessoa').should('be.visible');
        cy.contains('1000').should('be.visible');
    }
}

export default VisualizarUsuarioPage
