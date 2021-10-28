// INFO: Symbol is defined by ES2015 as constructor, so it's named with *class
export abstract class SymbolClass {
  readonly arraySize: number
  readonly inlineSize: number

  constructor(arraySize: number, inlineSize: number) {
    this.arraySize = arraySize
    this.inlineSize = inlineSize
  }

  protected create2DArray(size: number, initialValue: number): number[][] {
    return [...Array(size)].map(() => Array(size).fill(initialValue))
  }

  abstract toArray(): { count: number; data: number[][] }
}

