const { jumpingOnClouds } = require("./solver")
const assert = require("assert")

let testCases = [
    {
        arr: [0, 1, 0, 0, 0, 1, 0],
        expected: 3
    },
    {
        arr: [0, 1, 0, 0, 0, 1, 0, 0],
        expected: 4
    },
    {
        arr: [0, 0, 0, 0, 0, 0, 0, 0],
        expected: 4
    },
    {
        arr: [0, 0, 1, 0, 1, 0, 0, 1, 0],
        expected: 5
    },
    {
        arr: [0, 0, 0 , 1, 0, 0],
        expected: 3
    }
]

for (let {arr, expected} of testCases) {
    let result = jumpingOnClouds(arr)
    assert(result === expected)
}