function counting_valleys(n, s) {
    const DIRECTIONS = {
        U: 1,
        D: -1
    }

    let valleys = 0
    let currentLevel = 0

    for (let i = 0; i < n; i++) {
        let step = s[i]
        if ((currentLevel < 0) && (currentLevel + DIRECTIONS[step]) === 0) {
            valleys++
        }
        currentLevel += DIRECTIONS[step]
    }

    return valleys
}

let tests = [
    {
        id: 1,
        n: 8,
        steps: "UDDDUDUU",
        expected_result: 1
    },
    {
        id: 2,
        n: 12,
        steps: "DDUUDDUDUUUD",
        expected_result: 2
    },
    {
        id: 3,
        n: 100,
        steps: "DUUUUDDUDDDUDDUDUUDUDDUUDUDDDUUDUDUDDDUDUDDDDUUDDDDDUUUDDDUUUDDUDUDDDUUUDDUUUDDDDUDUDUDDUUDDDUDUDUDU",
        expected_result: 6
    },
    {
        id: 4,
        n: 100,
        steps: "DDDUDUUDDDUUDUUDDDUDDUUUUUUDDUDUUUDDDDUDUUDDUDDDUUUDUUUDUUUDUDDDUUDUDDDUUUDUDDDUDUUUUDDUUUUUDDDDDUUU",
        expected_result: 8
    },
    {
        id: 5,
        n: 100,
        steps: "UDUDDUDUUUDDUDDUDDUDDUUUDUDUDDDDDUDDUUUDUDDDDUDDUUDUUDUUUDDUDUUUDUUUUDUUUDDUDUUDDDDUUDDDUUDDDDUUDDDD",
        expected_result: 9
    },
    {
        id: 6,
        n: 100,
        steps: "DDUUDUDDUDUDUDUUUDUUDUUUDDDDDDUUUDUDDDDDUDUUDUUUDUUUDUDDUUDUUUDUUDDDUUDUDDUUUDUUUUDUUUUDUUDDDUUDDDUU",
        expected_result: 6
    },
]

function runCases(tests) {
    for (const test of tests) {
        let result = counting_valleys(
            test.n,
            test.steps
        )

        console.assert(
            result === test.expected_result,
            `failed (${test.id}) expected ${test.expected_result}, got: ${result}: ${test.steps}`
        )

        console.log("result", result);
    }
}

runCases(tests)