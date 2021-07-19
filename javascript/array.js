const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];


let toObj = json => JSON.parse(json);
let price = product => product.preco;

result = carrinho.map(toObj).map(price);
console.log(result)

result = carrinho.map(e => {
    let price = parseFloat(e.match(/\d+.\d+/g));
    return price;
});

console.log(result2)