module.exports = class CountValleys {
    static get DIRECTIONS() {
        return {
            U: {
                U: 1,
                D: 0
            },
            D: {
                D: -1,
                U: 0
            }
        }
    }
    #stepsLength
    #steps
    #previousStep
    #valleys
    #currentLevel

    constructor(stepsLength, steps) {
        this.#stepsLength = stepsLength
        this.#steps = steps
        this.#previousStep = steps[0]
        this.#valleys = {}
        this.#currentLevel = 0
    }

    countValleys() {
        for (const step of this.#steps.split("")) {
            this.#currentLevel += CountValleys.DIRECTIONS[step][this.#previousStep]
            if (this.#currentLevel < 0 && (this.#previousStep === "D" && step === "U")) {
                if (this.#valleys[this.#currentLevel]) {
                    this.#valleys[this.#currentLevel]++
                } else {
                    this.#valleys[this.#currentLevel] = 1
                }
            }
            this.#previousStep = step
        }

        return Object.keys(this.#valleys).filter(valley => +valley < 0).length
    }

}