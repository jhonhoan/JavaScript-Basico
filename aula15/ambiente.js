let num = [1, 80, 2, 50, 5, 20]

num.sort()
console.log(num)

let pos = num.indexOf(80)

console.log(`O valor 80 esta na posicao ${pos}`)

for (let c in num)
{
    console.log(`Pocisao ${c} tem valor: ${num[c]}`)
}