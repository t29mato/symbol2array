import { SymbolClass  } from '../symbol'

export class Triangle extends SymbolClass {
  constructor(arraySize: number, inlineSize: number) {
    super(arraySize, inlineSize)
  }

  toArray(): { count: number; data: number[][] } {
    const data = this.create2DArray(this.arraySize, 0)
    let count = 0
    const triangleSideLength = this.arraySize - 1
    const halfSideLength = triangleSideLength / 2
    const triangleHeight = halfSideLength * Math.sqrt(3)

    // const diagonal = this.arraySize - 1
    // const halfD = diagonal / 2
    // const innerHalfD = halfD - this.inlineSize
    const isInline = this.inlineSize > 0
    for (let h = 0; h < this.arraySize; h++) {
      for (let w = 0; w < this.arraySize; w++) {
        const x = 0 - halfSideLength + w
        const y = 0 + triangleHeight - h
        const root3 = Math.sqrt(3)
        // INFO: 底辺より下は対象外
        if (y < 0) {
          continue
        }
        if (isInline) {
          if (root3 * (halfSideLength - Math.abs(x)) < y) {
            continue
          }
          if (root3 * (halfSideLength - Math.abs(x)) - this.inlineSize >= y) {
            if (y > this.inlineSize) {
              continue
            }
          }
          count++
          data[h][w] = 1
        } else {
          // INFO: 左右上辺は対象外
          if (root3 * (halfSideLength - Math.abs(x)) < y) {
            continue
          }
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
}
