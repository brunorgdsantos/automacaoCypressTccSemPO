import CadastrarUsuarioPage from '../support/pageObjects/CadastrarUsuarioPage'
import VisualizarUsuarioPage from '../support/pageObjects/VisualizarUsuarioPage'
import EditarUsuarioPage from '../support/pageObjects/EditarUsuarioPage'
const cadastrarUsuarioPage = new CadastrarUsuarioPage
const visualizarUsuarioPage = new VisualizarUsuarioPage
const editarUsuarioPage = new EditarUsuarioPage
const url = Cypress.config("baseUrl")

describe('Testes de edição de usuário cadastrado', () => {

    beforeEach(() => cadastrarUsuarioPage.acessarSite());

    it('edição de usuário cadastrado', () => {
        editarUsuarioPage.acessarAmbientePesquisaUsuario();
        visualizarUsuarioPage.preencherCampoCustomerName();
        editarUsuarioPage.clicarEdit();
        editarUsuarioPage.preencherCampoCustomerName();
        editarUsuarioPage.clicarUpdateChanges();
        editarUsuarioPage.visualizarMensagemEditadoSucesso();
    })
})