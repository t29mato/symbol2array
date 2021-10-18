// TODO: resultでは名前がいけてない
interface result {
  count: number
  data: number[][]
}

export const circle = (size: number): result => {
  if (size < 1) {
    throw new Error('Circle size should be more than 1')
  }
  if (size === 1) {
    return {
      count: 1,
      data: [[1]],
    }
  }
  if (size === 2) {
    return {
      count: 4,
      data: [
        [1, 1],
        [1, 1],
      ],
    }
  }
  const diameter = size - 1
  const radius = diameter / 2
  const data = [...Array(size)].map(() => Array(size).fill(0))
  let count = 0
  for (let h = 0; h < size; h++) {
    for (let w = 0; w < size; w++) {
      if ((h - radius) ** 2 + (w - radius) ** 2 <= radius ** 2.1) {
        count++
        data[h][w] = 1
      }
    }
  }
  return {
    count,
    data,
  }
}

export const circleInline = (size: number, inlineSize: number): result => {
  if (size < 1 || inlineSize < 1) {
    throw new Error('Circle size or inline width should be more than 1')
  }
  if (size < 3) {
    return circle(size)
  }
  const outerDiameter = size - 1
  const outerRadius = outerDiameter / 2
  const innerDiameter = outerDiameter - inlineSize * 2
  const innerRadius = innerDiameter / 2
  if (outerDiameter <= innerDiameter || innerDiameter < 0) {
    return circle(size)
  }

  const data = [...Array(size)].map(() => Array(size).fill(0))
  let count = 0
  for (let h = 0; h < size; h++) {
    for (let w = 0; w < size; w++) {
      const lengthSquare = (h - outerRadius) ** 2 + (w - outerRadius) ** 2
      if (
        lengthSquare <= outerRadius ** 2.1 &&
        lengthSquare > innerRadius ** 2.1
      ) {
        count++
        data[h][w] = 1
      }
    }
  }
  return {
    count,
    data,
  }
}
