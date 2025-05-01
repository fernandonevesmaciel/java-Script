let num = [5, 8, 2]
// num [3] = 6 // adicionando numero na posição 3
// num [4] = 50 // adicionando numero na posição 4
// num.push(7) //adicionar na ultima vaga ou indice chave
// num.length  // quantidade de posições indices chave tem na variavel
// num.sort() // vetores ficam de forma crescente

num.sort()
num.push(1)
console.log(`Nosso vetor é o ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(7) // procura na variavel composta o valor, caso não tiver ele retorna -1 que para o javaScript quer dizer que não achou o valor

if (pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}


