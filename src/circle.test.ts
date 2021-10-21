import { CircleInline } from '.'
import { Circle } from './circle'

test('Circle size: 0', () => {
  expect(() => {
    new Circle(0).toArray()
  }).toThrowError('array size should be more than 1.')
})
test('Circle size: 1', () => {
  const asis = new Circle(1).toArray()
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 2', () => {
  const asis = new Circle(2).toArray()
  const tobe = {
    data: [
      [0, 0],
      [0, 0],
    ],
    count: 0,
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 3', () => {
  const asis = new Circle(3).toArray()
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

test('Circle size: 4', () => {
  const asis = new Circle(4).toArray()
  expect(asis).toStrictEqual({
    count: 4,
    data: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  })
})

test('Circle size: 11', () => {
  const asis = new Circle(11).toArray()
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

test('Circle size: 0, inline size: 0', () => {
  expect(() => {
    new CircleInline(0, 0).toArray()
  }).toThrowError('Inline size should be more than 1.')
})

test('Circle size: 1, inline size: 0', () => {
  expect(() => {
    new CircleInline(1, 0).toArray()
  }).toThrowError('Inline size should be more than 1.')
})

test('Circle size: 1, inline size: 1', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(new CircleInline(1, 1).toArray()).toStrictEqual(tobe)
})

test('Circle size: 3, inline size: 1', () => {
  const asis = new CircleInline(3, 1).toArray()
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
  const asis = new CircleInline(4, 1).toArray()
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
  const asis = new CircleInline(5, 1).toArray()
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
  const asis = new CircleInline(5, 2).toArray()
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
  const asis = new CircleInline(5, 3).toArray()
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
  const asis = new CircleInline(5, 4).toArray()
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
  const asis = new CircleInline(10, 1).toArray()
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
  const asis = new CircleInline(11, 2).toArray()
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
