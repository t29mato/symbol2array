import { Circle } from "../circle"
import { Diamond } from "../diamond"
import { Square } from "../square"
import { SymbolClass } from "../symbol"
import { Triangle } from "../triangle"

type SymbolType = 'circle' | 'square' | 'diamond' | 'triangle'

export class SymbolCreator {
  createSymbol(type: SymbolType, arraySize: number, inlineSize: number): SymbolClass {
    if (arraySize < 1) {
      throw new Error('array size should be more than 1.')
    }
    if (inlineSize < 0) {
      throw new Error('inline size should be more than 0.')
    }
    switch (type) {
      case 'circle':
        return new Circle(arraySize, inlineSize)
      case 'square':
        return new Square(arraySize, inlineSize)
      case 'diamond':
        return new Diamond(arraySize, inlineSize)
      case 'triangle':
        return new Triangle(arraySize, inlineSize)
      default:
        throw new Error("Unexpected symbol type");
    }
  }
}

