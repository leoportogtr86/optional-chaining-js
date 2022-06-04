const recurso = {
    nome: 'optional_chaining',
    referencia_url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining',
    descricao: 'O operador de encadeamento opcional ?. permite a leitura do valor de uma propriedade localizada internamente em uma cadeia de objetos conectados, sem que a validação de cada referência da cadeia seja expressivamente realizada.',
    chave_nula: null,
    metodo() {
        return null;
    }
}

console.log(recurso.nome);
console.log(recurso.referencia_url);
console.log(recurso.chave_qlqr?.toUpperCase());
console.log(recurso.metodo());
console.log(recurso.metodo_nao_existente?.());
console.log(recurso['chave_nao_existente']?.desc);
