const { repeatedString } = require("./solution")
const assert = require("assert")

let testCases = [
    {
        input: {
            string: "aba",
            n: 10
        },
        expected: 7
    },
    {
        input: {
            string: "aba",
            n: 12
        },
        expected: 8
    },
    {
        input: {
            string: "aba",
            n: 13
        },
        expected: 9
    },
    {
        input: {
            string: "a",
            n: 1000000000000
        },
        expected: 1000000000000
    },
]

for (let {input, expected} of testCases) {
    let {string, n} = input
    let result = repeatedString(string, n)
    assert(result === expected)
}