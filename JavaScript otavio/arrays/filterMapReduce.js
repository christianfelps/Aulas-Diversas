const numero = [1,2,3,6,4,88,79,65,15]

const nums = numero.filter(valor => valor % 2 === 0)
.map(valor=> valor *2 ).reduce((ac, va)=> ac + va)
console.log(nums)

// [ 2, 6, 4, 88 ] pares
// [ 4, 12, 8, 176 ] dobro