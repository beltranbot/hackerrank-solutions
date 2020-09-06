function repeatedString(string, n) {
    let howManyFit = Math.floor(n / string.length)
    let leftover = n - (string.length * howManyFit)

    let counter = (
        ((string.match(/a/g) || []).length * howManyFit) +
        (string.substring(0, leftover).match(/a/g) || []).length
    )

    return counter
}

module.exports = { repeatedString }

let string = "hello world"
let result = (string.match(/a/g) || []).length // 3
result