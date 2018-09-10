/**
 * 10001st prime
Problem 7 
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
 */

function isPrime(n) {
    if (n <= 1) return false
    if (n == 2) return true
    if (n % 2 == 0) return false

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false
    }

    return true
}

function _10001stPrime(n = 10001) {
    let i = 1
    let j = 0
    while (j < n) {
        i++
        if (isPrime(i)) {
            j++
        }
    }
    return i
}

console.time('_10001stPrime')
let ans = _10001stPrime(10001)
console.timeEnd('_10001stPrime')

console.log(ans)