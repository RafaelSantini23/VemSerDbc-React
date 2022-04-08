export interface ListaEnderecoDTO {
    endereco: {
        cep: string,
        logradouro: string,
        complemento: string,
        bairro: string,
        localidade: string,
        uf: string,
        numero: string,
        pais: string,
        tipo: string,
    }[];
}