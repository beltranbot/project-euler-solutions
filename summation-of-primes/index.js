/**
 * Summation of primes
Problem 10 
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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

function summationOfPrimes (n) {
    let i = 2
    let total = 0

    while (i < n) {
        if (isPrime(i)) {
            total += i
        }
        i++
    }

    return total
}

let n = 2000000
console.time('summationOfPrimes')
let ans = summationOfPrimes(n)
console.timeEnd('summationOfPrimes')

console.log(ans)