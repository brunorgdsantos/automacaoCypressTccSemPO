class DeletarUsuarioElements {

    botaoEdit() {
        return cy.get('[class="btn btn-default btn-outline-dark"]').eq(1);
    }

    botaoSelecaoActions() {
        return cy.get('[class="select-row"]');
    }

    botaoDeletar() {
        return cy.get('#gcrud-search-form > div.scroll-if-required > table > thead > tr.filter-row.gc-search-row > td.no-border-left > div.floatL > a > span');
    }

    botaoConfirmarDelete() {
        return cy.get('body > div.container-fluid.gc-container > div.row > div.delete-multiple-confirmation.modal.fade.in.show > div > div > div.modal-footer > button.btn.btn-danger.delete-multiple-confirmation-button');
    }

}

export default DeletarUsuarioElements