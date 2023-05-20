import CadastrarUsuarioPage from '../support/pageObjects/CadastrarUsuarioPage'
const cadastrarUsuarioPage = new CadastrarUsuarioPage
const url = Cypress.config("baseUrl")

describe('Testes de cadastro de usuário', () => {

    beforeEach(() => cadastrarUsuarioPage.acessarSite());

    it('cadastro de um usuário', () => {
        cadastrarUsuarioPage.acessarPaginaCadastroUsuario();
        cadastrarUsuarioPage.clicarAddRecord();
        cadastrarUsuarioPage.preencherCampoCustomerName();
        cadastrarUsuarioPage.preencherCampoContactLastName();
        cadastrarUsuarioPage.preencherCampoContactFirstName();
        cadastrarUsuarioPage.preencherCampoPhone();
        cadastrarUsuarioPage.preencherCampoAddressLine1();
        cadastrarUsuarioPage.preencherCampoAddressLine2();
        cadastrarUsuarioPage.preencherCampoCity();
        cadastrarUsuarioPage.preencherCampoState();
        cadastrarUsuarioPage.preencherCampoPostalCode();
        cadastrarUsuarioPage.preencherCampoCountry();
        cadastrarUsuarioPage.preencherCampoSalesRepEmployeeNumber();
        cadastrarUsuarioPage.preencherCampoCreditLimit();
        cadastrarUsuarioPage.clicarSave();
        cadastrarUsuarioPage.visualizarMensagemCadastroSucesso();
    })
})