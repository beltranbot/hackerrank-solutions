function jumpingOnClouds(arr) {
    let jumps = 0
    for (let i = 0; i < arr.length - 1; i++) {
        let a = i + 1
        let b = i + 2
        jumps++
        if (arr[b] == 0) {
            i = b - 1
        } else {
            i = a - 1
        }

    }

    return jumps
};

module.exports = { jumpingOnClouds }