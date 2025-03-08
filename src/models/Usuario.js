class Usuario {
    constructor(idUsuario, nome, login, senha, nivelAcesso) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.nivelAcesso = nivelAcesso;
    }

    // Função para validar se já existe um usuário com o mesmo login
    static validarLoginExistente(login, listaUsuarios) {
        const loginExistente = listaUsuarios.some(usuario => usuario.login === login);
        if (loginExistente) {
            this.exibirAlerta(`O login "${login}" já está em uso. Por favor, escolha outro login.`);
        }
        return loginExistente;
    }

    // Função para exibir um alerta (simulação de alerta para o visitante)
    static exibirAlerta(mensagem) {
        console.warn('ALERTA:', mensagem); // Exibe um alerta no console
        // Em um ambiente real, você pode usar `alert()` no frontend ou uma biblioteca de notificações.
    }

    // Função para autenticar o usuário
    autenticarUsuario(login, senha) {
        if (this.login === login && this.senha === senha) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        } else {
            console.log('Login ou senha incorretos.');
            return false;
        }
    }

    // Função para definir permissões com base no nível de acesso
    definirPermissoes() {
        switch (this.nivelAcesso) {
            case 'admin':
                console.log('Permissões de administrador: Acesso total ao sistema.');
                break;
            case 'editor':
                console.log('Permissões de editor: Pode editar conteúdo, mas não pode administrar usuários.');
                break;
            case 'visitante':
                console.log('Permissões de visitante: Apenas leitura.');
                break;
            default:
                console.log('Nível de acesso desconhecido. Permissões não definidas.');
        }
    }
}

module.exports = Usuario;