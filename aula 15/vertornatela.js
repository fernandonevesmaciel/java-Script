
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
// console.log(valores) //maneira de aparecer todos os valores de uma vez

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3]) maneira de aparecer os valores separados.
console.log(valores[4])
console.log(valores[5])
*/
/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //maneira usando variavel de repetição for
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // usando a variavel de repetição for in, essa variavel usada apanas para variais compostas 
}
    




