import { SquareCreator } from './square'

const squareCreator = new SquareCreator()

test('square size: 10, inline size: -10', () => {
  expect(() => {
    squareCreator.createSymbol(10, -10).toArray()
  }).toThrowError('inline size should be more than 0.')
})

test('square size: 0, inline size: 0', () => {
  expect(() => {
    squareCreator.createSymbol(0, 0).toArray()
  }).toThrowError('array size should be more than 1.')
})

test('Square size: 1, inline size: 0', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(squareCreator.createSymbol(1, 0).toArray()).toStrictEqual(tobe)
})

test('Square size: 1, inline size: 1', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(squareCreator.createSymbol(1, 1).toArray()).toStrictEqual(tobe)
})

test('Square size: 3, inline size: 1', () => {
  const asis = squareCreator.createSymbol(3, 1).toArray()
  const tobe = {
    count: 8,
    data: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Square size: 10, inline size: 1', () => {
  const asis = squareCreator.createSymbol(10, 1).toArray()
  const tobe = {
    count: 36,
    data: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Square size: 10, inline size: 3', () => {
  const asis = squareCreator.createSymbol(10, 3).toArray()
  const tobe = {
    count: 84,
    data: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Square size: 10, inline size: 10', () => {
  const asis = squareCreator.createSymbol(10, 10).toArray()
  const tobe = {
    count: 100,
    data: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})
