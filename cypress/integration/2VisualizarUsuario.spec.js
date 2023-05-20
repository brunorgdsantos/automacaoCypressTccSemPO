import CadastrarUsuarioPage from '../support/pageObjects/CadastrarUsuarioPage'
import VisualizarUsuarioPage from '../support/pageObjects/VisualizarUsuarioPage'
const cadastrarUsuarioPage = new CadastrarUsuarioPage
const visualizarUsuarioPage = new VisualizarUsuarioPage

describe('Testes de visualização de usuário cadastrado', () => {

    beforeEach(() => cadastrarUsuarioPage.acessarSite());

    it('visualização de usuário cadastrado', () => {
        visualizarUsuarioPage.acessarAmbientePesquisaUsuario();
        visualizarUsuarioPage.preencherCampoCustomerName();
        visualizarUsuarioPage.visualizarUsuarioCadastrado();
    })
})