import { SymbolClass, SymbolCreator } from '../symbol'

export class DiamondCreator extends SymbolCreator {
  createSymbol(arraySize: number, inlineSize: number): SymbolClass {
    if (arraySize < 1) {
      throw new Error('array size should be more than 1.')
    }
    if (inlineSize < 0) {
      throw new Error('inline size should be more than 0.')
    }
    return new Diamond(arraySize, inlineSize)
  }
}

class Diamond extends SymbolClass {
  constructor(arraySize: number, inlineSize: number) {
    super(arraySize, inlineSize)
  }

  toArray(): { count: number; data: number[][] } {
    const data = this.create2DArray(this.arraySize, 0)
    let count = 0
    const diagonal = this.arraySize - 1
    const halfD = diagonal / 2
    const innerHalfD = halfD - this.inlineSize
    const isInline = this.inlineSize > 0
    for (let h = 0; h < this.arraySize; h++) {
      for (let w = 0; w < this.arraySize; w++) {
        // INFO: 中心は(halfD, halfD)
        const x = 0 - halfD + w
        const y = 0 + halfD - h
        if (isInline && innerHalfD > 0) {
          if (
            Math.abs(x) + Math.abs(y) <= halfD &&
            Math.abs(x) + Math.abs(y) > innerHalfD
          ) {
            count++
            data[h][w] = 1
          }
        } else {
          if (Math.abs(x) + Math.abs(y) <= halfD) {
            count++
            data[h][w] = 1
          }
        }
      }
    }
    return {
      count,
      data,
    }
  }
}
