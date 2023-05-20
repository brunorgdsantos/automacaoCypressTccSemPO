import CadastrarUsuarioPage from '../support/pageObjects/CadastrarUsuarioPage'
import EditarUsuarioPage from '../support/pageObjects/EditarUsuarioPage'
import DeletarUsuarioPage from '../support/pageObjects/DeletarUsuarioPage'
const cadastrarUsuarioPage = new CadastrarUsuarioPage
const editarUsuarioPage = new EditarUsuarioPage
const deletarUsuarioPage = new DeletarUsuarioPage


describe('Testes de exclusão de usuário cadastrado', () => {

    beforeEach(() => cadastrarUsuarioPage.acessarSite());

    it('deletar de usuário cadastrado', () => {
        editarUsuarioPage.acessarAmbientePesquisaUsuario();
        deletarUsuarioPage.preencherCampoCustomerName();
        deletarUsuarioPage.visualizarUsuarioPesquisado();
        deletarUsuarioPage.selecionarUsuarioPesquisado();
        deletarUsuarioPage.deletarUsuario();
        deletarUsuarioPage.visualizarMensagemDelete();
        deletarUsuarioPage.confirmarDelete()
        deletarUsuarioPage.visualizarConfirmacaoDelete();
    })
})