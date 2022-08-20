/* let num = [5,8,2,9,3]
console.log(`nosso vetor é ${num}`)
num.sort()
console.log(`Nosso vetor ordenado é ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos.`)

let valores = [8, 1, 7, 4, 2, 9]

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let valores = [8, 1, 7, 4, 2, 9]
for (let pos in valores) {      // "para cada posição dentro de valores, eu vou mostrar o valores[pos]"
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

let num = [5,8,2,9,10]
console.log(`nosso vetor é ${num}`)
num.sort()
console.log(`Nosso vetor ordenado é ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos.`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
} console.log(`O valor está na posição ${pos}`)
