import { Diamond } from './diamond'

test('Diamond size: 1, inline size: 0', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(new Diamond(1, 0).toArray()).toStrictEqual(tobe)
})

test('Diamond size: 1, inline size: 1', () => {
  const tobe = {
    count: 1,
    data: [[1]],
  }
  expect(new Diamond(1, 1).toArray()).toStrictEqual(tobe)
})

test('Diamond size: 3, inline size: 0', () => {
  const asis = new Diamond(3, 0).toArray()
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

test('Diamond size: 3, inline size: 1', () => {
  const asis = new Diamond(3, 1).toArray()
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

test('Diamond size: 11, inline size: 1', () => {
  const asis = new Diamond(11, 1).toArray()
  const tobe = {
    count: 20,
    data: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Diamond size: 11, inline size: 3', () => {
  const asis = new Diamond(11, 3).toArray()
  const tobe = {
    count: 48,
    data: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Diamond size: 11, inline size: 5', () => {
  const asis = new Diamond(11, 5).toArray()
  const tobe = {
    count: 61,
    data: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})

test('Diamond size: 11, inline size: 20', () => {
  const asis = new Diamond(11, 20).toArray()
  const tobe = {
    count: 61,
    data: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
  }
  expect(asis).toStrictEqual(tobe)
})
