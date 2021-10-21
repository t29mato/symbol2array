abstract class Symbol {
  readonly arraySize: number

  constructor(arraySize: number) {
    if (arraySize < 1) {
      throw new Error('array size should be more than 1.')
    }
    this.arraySize = arraySize
  }

  protected createEmptyArray(size: number): number[][] {
    return [...Array(size)].map(() => Array(size).fill(0))
  }
}

export class Circle extends Symbol {
  readonly diameter: number
  readonly radius: number

  constructor(arraySize: number) {
    super(arraySize)
    this.diameter = arraySize - 1
    this.radius = this.diameter / 2
  }

  toArray(): { count: number; data: number[][] } {
    const data = this.createEmptyArray(this.arraySize)
    let count = 0
    for (let h = 0; h < this.arraySize; h++) {
      for (let w = 0; w < this.arraySize; w++) {
        if (
          (h - this.radius) ** 2 + (w - this.radius) ** 2 <=
          this.radius ** 2
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
}

export class CircleInline extends Circle {
  readonly inlineSize: number
  readonly outerDiameter: number
  readonly outerRadius: number
  readonly innerRadius: number

  constructor(arraySize: number, inlineSize: number) {
    if (inlineSize < 1) {
      throw new Error('Inline size should be more than 1.')
    }
    super(arraySize)
    this.inlineSize = inlineSize
    this.outerDiameter = this.diameter
    this.outerRadius = this.radius
    this.innerRadius = Math.max(this.outerRadius - inlineSize, 0)
  }

  toArray(): { count: number; data: number[][] } {
    const data = this.createEmptyArray(this.arraySize)
    let count = 0
    for (let h = 0; h < this.arraySize; h++) {
      for (let w = 0; w < this.arraySize; w++) {
        const lengthSquare =
          (h - this.outerRadius) ** 2 + (w - this.outerRadius) ** 2
        if (
          lengthSquare <= this.outerRadius ** 2 &&
          lengthSquare >= this.innerRadius ** 2
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
}
