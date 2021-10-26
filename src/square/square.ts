import { SymbolClass, SymbolCreator } from 'symbol'
export class SquareCreator extends SymbolCreator {
  createSymbol(arraySize: number, inlineSize: number): SymbolClass {
    if (arraySize < 1) {
      throw new Error('array size should be more than 1.')
    }
    if (inlineSize < 0) {
      throw new Error('inline size should be more than 0.')
    }
    return new Square(arraySize, inlineSize)
  }
}

export class Square extends SymbolClass {
  constructor(arraySize: number, inlineSize: number) {
    super(arraySize, inlineSize)
  }

  toArray(): { count: number; data: number[][] } {
    const data = this.create2DArray(this.arraySize, 1)
    let count = this.arraySize ** 2
    if (this.inlineSize === 0) {
      return {
        count,
        data,
      }
    }
    const sideLength = this.arraySize - 1
    if (sideLength / 2 < this.inlineSize) {
      return {
        count,
        data,
      }
    }
    const frontInline = this.inlineSize
    const backInline = sideLength - this.inlineSize
    for (let h = 0; h < this.arraySize; h++) {
      for (let w = 0; w < this.arraySize; w++) {
        if (
          frontInline <= h &&
          h <= backInline &&
          frontInline <= w &&
          w <= backInline
        ) {
          count--
          data[h][w] = 0
        }
      }
    }
    return {
      count,
      data,
    }
  }
}
