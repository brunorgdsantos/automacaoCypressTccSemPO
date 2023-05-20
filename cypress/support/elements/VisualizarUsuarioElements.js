class VisualizarUsuarioElements {

    campoCustomerName() {
        return cy.get('[class="form-control searchable-input floatL"]').eq(0);
    }

}

export default VisualizarUsuarioElements