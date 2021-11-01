import { SymbolClass } from '../symbol'

export class Triangle extends SymbolClass {
  constructor(arraySize: number, inlineSize: number) {
    super(arraySize, inlineSize)
  }

  toArray(): { count: number; data: number[][] } {
    const data = this.create2DArray(this.arraySize, 0)
    let count = 0
    const side = this.arraySize - 1
    const halfSide = side / 2
    const height = halfSide * Math.sqrt(3)
    const border = this.inlineSize

    const isInline = border > 0
    // INFO: https://miro.com/app/board/o9J_lm3yQfU=/?moveToWidget=3074457366733302565&cot=14
    for (let row = 0; row < this.arraySize; row++) {
      for (let col = 0; col < this.arraySize; col++) {
        // INFO: 原点は外側の三角形の下辺の中心
        const x = col - halfSide
        const y = height - row
        // INFO: 正三角形の斜辺の傾きは-2
        const a = -2
        const b = height
        const b_inner = height - 2 * border
        // INFO: 底辺より下は対象外
        if (y < 0) {
          continue
        }
        if (isInline) {
          if (y > a * Math.abs(x) + b) {
            continue
          }
          if (y < a * Math.abs(x) + b_inner) {
            if (y > border) {
              continue
            }
          }
          count++
          data[row][col] = 1
        } else {
          // INFO: 左右上辺は対象外
          if (y > a * Math.abs(x) + b) {
            continue
          }
          count++
          data[row][col] = 1
        }
      }
    }
    return {
      count,
      data,
    }
  }
}
