type symbolType = 'circle'

export const circle2array = (diameter: number): boolean[][] => {
    if (diameter < 2) {
        throw new Error("Circle diameter should be more than 2");
    }
    // if (diameter === 1) {
    //     return [[true, true], [true, true]]
    // }
    const radius = diameter / 2
    const result = [...Array(diameter+1)].map(item => Array(diameter+1).fill(false))
    for (let h = 0; h <= diameter; h++) {
        for (let w = 0; w <= diameter; w++) {
            if ((h - radius) ** 2 + (w - radius) ** 2 <= radius ** 2) {
                result[h][w] = true
            }
        }
    }
    return result
}

