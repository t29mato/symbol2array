import { SymbolClass } from '../symbol'

export class Circle extends SymbolClass {
  constructor(arraySize: number, inlineSize: number) {
    super(arraySize, inlineSize)
  }

  toArray(): { count: number; data: number[][] } {
    const diameter = this.arraySize - 1
    const radius = diameter / 2
    // INFO: inline size is 0 means inner radius size must be 0
    const innerRadius =
      this.inlineSize === 0 ? 0 : Math.max(radius - this.inlineSize, 0)

    const data = this.create2DArray(this.arraySize, 0)
    let count = 0
    for (let h = 0; h < this.arraySize; h++) {
      for (let w = 0; w < this.arraySize; w++) {
        const lengthSquare = (h - radius) ** 2 + (w - radius) ** 2
        if (lengthSquare <= radius ** 2 && lengthSquare >= innerRadius ** 2) {
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
