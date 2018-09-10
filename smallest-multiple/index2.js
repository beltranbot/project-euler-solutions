function smallesMultiple (k = 20) {
    let p = [2, 3, 5, 7, 11, 13, 19, 23]
    let a = new Array(p.length).fill(0)
    let n = 1
    let i = 0
    let check = true

    let limit = Math.sqrt(k)

    while (p[i] <= k) {
        a[i] = 1
        if (check) {
            if (p[i] <= limit) {
                a[i] = Math.floor(Math.log(k) / Math.log(p[i]))
            } else {
                check = false
            }
        }
        n = n * p[i] ^ a[i]
        i++
    }

    return n
}

console.time('smallesMultiple')
let ans = smallesMultiple(20)
console.timeEnd('smallesMultiple')

console.log(ans)