import { circle } from './circle'

test('Circle size: 0', () => {
  expect(() => {
    circle(0)
  }).toThrowError('Circle size should be more than 1')
})
test('Circle size: 1', () => {
  const asis = circle(1)
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 2', () => {
  const asis = circle(2)
  const tobe = {
    data: [
      [1, 1],
      [1, 1],
    ],
    count: 4,
  }
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 3', () => {
  const asis = circle(3)
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
  const asis = circle(4)
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
  const asis = circle(11)
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
    circle(0, 0)
  }).toThrowError('Circle size should be more than 1')
})

test('Circle size: 1, inline size: 0', () => {
  expect(() => {
    circle(1, 0)
  }).toThrowError('Circle size should be more than 1')
})

test('Circle size: 1, inline size: 1', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(circle(1, 1)).toStrictEqual(tobe)
})

test('Circle size: 3, inline size: 1', () => {
  const asis = circle(3, 1)
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
  const asis = circle(4, 1)
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
  const asis = circle(5, 1)
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
  const asis = circle(5, 2)
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
  const asis = circle(5, 3)
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
  const asis = circle(5, 4)
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
  const asis = circle(10, 1)
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
  const asis = circle(11, 2)
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
