function fizzBuzz(num) {


    if (typeof num !== "number")
        return num


    if (num % 3 === 0 && num % 5 === 0)
        return 'FizzBuzz'
    if (num % 5 === 0)
        return 'Buzz'
    if (num % 3 === 0)
        return 'Fizz'

    return num



}
console.log('a', fizzBuzz('a'))
for (i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i))
}  
