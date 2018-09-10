/**
 * Special Pythagorean triplet
Problem 9 
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 */

function isSquare (n) {
    return Number.isInteger(Math.sqrt(n))
}

function specialPythagoreanTriplet () {
    let upper_bound = 1000

    for (let a = 1; a <= upper_bound; a++) {
        for (let b = 1; b <= upper_bound; b++) {
            let c = (a * a) + (b * b)
            if (!isSquare(c)) continue
            c = Math.sqrt(c)
            
            if ((a + b + c) == 1000) return a * b * c
        }
    }

    return 0
}

console.time('specialPythagoreanTriplet')
let ans = specialPythagoreanTriplet()
console.timeEnd('specialPythagoreanTriplet')
// 200 375 425
console.log(ans)