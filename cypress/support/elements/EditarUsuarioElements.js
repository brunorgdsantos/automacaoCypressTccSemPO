class EditarUsuarioElements {

    botaoEdit() {
        return cy.get('[class="btn btn-default btn-outline-dark"]').eq(1);
    }

    botaoUpdateChanges() {
        return cy.get('#form-button-save');
    }

}

export default EditarUsuarioElements