class CadastrarUsuarioElements {

    botaoAddRecord() {
        return cy.get('#gcrud-search-form > div.header-tools > div.floatL.t5 > a');
    }

    campoCustomerName() {
        return cy.get('#field-customerName');
    }

    campoContactLastName() {
        return cy.get('#field-contactLastName');
    }

    campoContactFirstName() {
        return cy.get('#field-contactFirstName');
    }

    campoPhone() {
        return cy.get('#field-phone');
    }

    campoAddressLine1() {
        return cy.get('#field-addressLine1');
    }

    campoAddressLine2() {
        return cy.get('#field-addressLine2');
    }

    campoCity() {
        return cy.get('#field-city');
    }

    campoState() {
        return cy.get('#field-state');
    }

    campoPostalCode() {
        return cy.get('#field-postalCode');
    }

    campoCountry() {
        return cy.get('#field-country');
    }

    campoSalesRepEmployeeNumber() {
        return cy.get('#field-salesRepEmployeeNumber');
    }

    campoCreditLimit() {
        return cy.get('#field-creditLimit');
    }

    botaoSave() {
        return cy.get('#form-button-save');
    }
}

export default CadastrarUsuarioElements