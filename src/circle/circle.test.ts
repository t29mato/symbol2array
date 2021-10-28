import { Circle } from './circle'

test('Circle size: 1, inline size: 0', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(new Circle(1, 0).toArray()).toStrictEqual(tobe)
})

test('Circle size: 1, inline size: 1', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(new Circle(1, 1).toArray()).toStrictEqual(tobe)
})

test('Circle size: 3, inline size: 1', () => {
  const asis = new Circle(3, 1).toArray()
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
  const asis = new Circle(4, 1).toArray()
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
  const asis = new Circle(5, 1).toArray()
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
  const asis = new Circle(5, 2).toArray()
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
  const asis = new Circle(5, 3).toArray()
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
  const asis = new Circle(5, 4).toArray()
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
  const asis = new Circle(10, 1).toArray()
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
  const asis = new Circle(11, 2).toArray()
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

test('Circle size: 11, inline size: 0', () => {
  const asis = new Circle(11, 0).toArray()
  const tobe = {
    count: 81,
    data: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})
