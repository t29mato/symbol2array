type binary = 0 | 1

export const circle2array = (count: number): binary[][] => {
    if (count < 3) {
        throw new Error("Circle diameter should be more than 3");
    }
    const diameter = count - 1
    const radius = diameter / 2
    const result = [...Array(count)].map(item => Array(count).fill(0))
    for (let h = 0; h < count; h++) {
        for (let w = 0; w < count; w++) {
            if ((h - radius) ** 2 + (w - radius) ** 2 <= radius ** 2) {
                result[h][w] = 1
            }
        }
    }
    return result
}
