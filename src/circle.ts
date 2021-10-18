type binary = 0 | 1

export const circle2array = (length: number): binary[][] => {
    if (length < 1) {
        throw new Error("Circle diameter should be more than 1");
    }
    if (length === 1) {
        return [[1]]
    }
    if (length === 2) {
        return [[ 1, 1], [ 1, 1]]
    }
    const diameter = length - 1
    const radius = diameter / 2
    const result = [...Array(length)].map(item => Array(length).fill(0))
    for (let h = 0; h < length; h++) {
        for (let w = 0; w < length; w++) {
            if ((h - radius) ** 2 + (w - radius) ** 2 <= radius ** 2) {
                result[h][w] = 1
            }
        }
    }
    return result
}
