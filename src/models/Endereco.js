class Endereco {
    constructor(CEP, rua, numero, bairro, cidade, uf, complemento) {
        this.CEP = CEP;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.complemento = complemento;
    }

    // Método para exibir o endereço
    exibirEndereco() {
        console.log('--- Endereço ---');
        console.log(`CEP: ${this.CEP}`);
        console.log(`Rua: ${this.rua}`);
        console.log(`Número: ${this.numero}`);
        console.log(`Bairro: ${this.bairro}`);
        console.log(`Cidade: ${this.cidade}`);
        console.log(`UF: ${this.uf}`);
        console.log(`Complemento: ${this.complemento}`);
    }

    // Método para cadastrar um endereço (simulação de persistência)
    static cadastrarEndereco(listaEnderecos, endereco) {
        listaEnderecos.push(endereco);
        console.log('Endereço cadastrado com sucesso!');
    }

    // Método para atualizar um endereço
    static atualizarEndereco(listaEnderecos, CEP, novosDados) {
        const endereco = listaEnderecos.find(end => end.CEP === CEP);
        if (endereco) {
            Object.assign(endereco, novosDados);
            console.log('Endereço atualizado com sucesso!');
        } else {
            console.log('Endereço não encontrado.');
        }
    }

    // Método para excluir um endereço
    static excluirEndereco(listaEnderecos, CEP) {
        const index = listaEnderecos.findIndex(end => end.CEP === CEP);
        if (index !== -1) {
            listaEnderecos.splice(index, 1);
            console.log('Endereço excluído com sucesso!');
        } else {
            console.log('Endereço não encontrado.');
        }
    }
}

module.exports = Endereco;