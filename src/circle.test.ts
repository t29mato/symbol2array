import { CircleCreator } from './circle'

const circleCreator = new CircleCreator()

test('circle size: 0, inline size: 0', () => {
  expect(() => {
    circleCreator.createSymbol(0, 0).toArray()
  }).toThrowError('array size should be more than 1.')
})

test('Circle size: 1, inline size: 0', () => {
  expect(() => {
    circleCreator.createSymbol(1, 0).toArray()
  }).toThrowError('Inline size should be more than 1.')
})

test('Circle size: 1, inline size: 1', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(circleCreator.createSymbol(1, 1).toArray()).toStrictEqual(tobe)
})

test('Circle size: 3, inline size: 1', () => {
  const asis = circleCreator.createSymbol(3, 1).toArray()
  const tobe = {
    count: 5,
    data: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 4, inline size: 1', () => {
  const asis = circleCreator.createSymbol(4, 1).toArray()
  const tobe = {
    count: 4,
    data: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 5, inline size: 1', () => {
  const asis = circleCreator.createSymbol(5, 1).toArray()
  const tobe = {
    count: 12,
    data: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 5, inline size: 2', () => {
  const asis = circleCreator.createSymbol(5, 2).toArray()
  const tobe = {
    count: 13,
    data: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 5, inline size: 3', () => {
  const asis = circleCreator.createSymbol(5, 3).toArray()
  const tobe = {
    count: 13,
    data: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 5, inline size: 4', () => {
  const asis = circleCreator.createSymbol(5, 4).toArray()
  const tobe = {
    count: 13,
    data: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 10, inline size: 1', () => {
  const asis = circleCreator.createSymbol(10, 1).toArray()
  const tobe = {
    count: 28,
    data: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 11, inline size: 2', () => {
  const asis = circleCreator.createSymbol(11, 2).toArray()
  const tobe = {
    count: 56,
    data: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})
