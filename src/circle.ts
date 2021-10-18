type binary = 0 | 1

export const circle2array = (length: number): binary[][] => {
    if (length < 1) {
        throw new Error("Circle length should be more than 1");
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

export const circleOutline2array = (length: number, outlineWdith: number): binary[][] => {
    if (length < 1 || outlineWdith < 1) {
        throw new Error("Circle length or outline width should be more than 1");
    }
    if (length < 3) {
        return circle2array(length)
    }
    const outerDiameter = length - 1
    const outerRadius = outerDiameter / 2
    const innerDiameter = outerDiameter - outlineWdith * 2
    const innerRadius = innerDiameter / 2
    if (outerDiameter <= innerDiameter || innerDiameter < 0) {
        return circle2array(length)
    }

    const result = [...Array(length)].map(item => Array(length).fill(0))
    for (let h = 0; h < length; h++) {
        for (let w = 0; w < length; w++) {
            const lengthSquare = (h - outerRadius) ** 2 + (w - outerRadius) ** 2
            if (
                lengthSquare <= outerRadius ** 2 &&
                lengthSquare > innerRadius ** 2
                ) {
                result[h][w] = 1
            }
        }
    }
    return result
}
