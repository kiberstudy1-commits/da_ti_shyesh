let arr = [50, 30, 45, 66, 5]

// let max = bzb[0]

// for(let i; i<bzb.length; i++) {
//     if(max < bzb[i]) {
//         max = bzb[1]
//     }
// }

// console.log(`Максимальное значение - ${max}`)

let max = Math.max(...arr)
console.log(`Максимальное значение - ${max}`)

let arr2 = arr.map(x => x*2)
console.log(`удвоенные значения - ${arr2}`)

let arrStr = arr.map(x => `Ваш балл за ЕГЭ ${x}`)
console.log(arrStr)

let arrSum = arr.reduce((akkum, curr) => {
    return akkum+curr
}, 0)
console.log(`Сумма - ${arrSum}`)