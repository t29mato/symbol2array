// INFO: Symbol is defined by ES2015 as constructor, so it's named with *class
export abstract class SymbolClass {
  readonly arraySize: number
  readonly inlineSize: number

  constructor(arraySize: number, inlineSize: number) {
    this.arraySize = arraySize
    this.inlineSize = inlineSize
  }

  protected createEmptyArray(size: number): number[][] {
    return [...Array(size)].map(() => Array(size).fill(0))
  }

  abstract toArray(): { count: number; data: number[][] }
}

export abstract class SymbolFactory {
  abstract createSymbol(arraySize: number, inlineSize: number): SymbolClass
}

export class CircleFactory extends SymbolFactory {
  createSymbol(arraySize: number, inlineSize: number): SymbolClass {
    if (arraySize < 1) {
      throw new Error('array size should be more than 1.')
    }
    if (inlineSize < 1) {
      throw new Error('Inline size should be more than 1.')
    }
    return new Circle(arraySize, inlineSize)
  }
}

export class Circle extends SymbolClass {
  constructor(arraySize: number, inlineSize: number) {
    super(arraySize, inlineSize)
  }

  toArray(): { count: number; data: number[][] } {
    const diameter = this.arraySize - 1
    const radius = diameter / 2
    const innerRadius = Math.max(radius - this.inlineSize, 0)

    const data = this.createEmptyArray(this.arraySize)
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
