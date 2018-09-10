/**
 * smallest multiple
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

function smallestMultiple (n = 10) {
    let a = 2520
    let prime_control = false
    let control = false

    let loop_control = 1
    let loop_break = 500000000

    let primes = [2, 3, 5, 7, 11, 13, 17, 19]

    while (true) {
        if (loop_control++ >= loop_break) break
        for (let i = 2; i < n; i++) {
            if (a % i) {
                control = true
                break
            }
        }
        if (!control) return a
        control = false
        a++
    }

    return a
}

console.time('smallestMultiple')
let ans = smallestMultiple(20)
console.timeEnd('smallestMultiple')

console.log(ans)