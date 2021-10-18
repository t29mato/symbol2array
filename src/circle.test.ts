import { circle, circleInline } from './circle'

test('Circle size: 0', () => {
  expect(() => {
    circle(0)
  }).toThrowError('Circle size should be more than 1')
})
test('Circle size: 1', () => {
  const asis = circle(1)
  const tobe = [[1]]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 2', () => {
  const asis = circle(2)
  const tobe = [
    [1, 1],
    [1, 1],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 3', () => {
  const asis = circle(3)
  const tobe = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 4', () => {
  expect(circle(4)).toStrictEqual([
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
})
test('Circle size: 11', () => {
  const asis = circle(11)
  const tobe = [
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
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 0, inline size: 0', () => {
  expect(() => {
    circleInline(0, 0)
  }).toThrowError('Circle size or inline width should be more than 1')
})

test('Circle size: 1, inline size: 0', () => {
  expect(() => {
    circleInline(1, 0)
  }).toThrowError('Circle size or inline width should be more than 1')
})

test('Circle size: 1, inline size: 1', () => {
  const tobe = [[1]]
  expect(circleInline(1, 1)).toStrictEqual(tobe)
})
test('Circle size: 1, inline size: 1', () => {
  const tobe = [[1]]
  expect(circleInline(1, 1)).toStrictEqual(tobe)
})

test('Circle size: 3, inline size: 1', () => {
  const asis = circleInline(3, 1)
  const tobe = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 4, inline size: 1', () => {
  const asis = circleInline(4, 1)
  const tobe = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})
test('Circle size: 5, inline size: 1', () => {
  const asis = circleInline(5, 1)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 5, inline size: 2', () => {
  const asis = circleInline(5, 2)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 5, inline size: 3', () => {
  const asis = circleInline(5, 3)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})
test('Circle size: 5, inline size: 4', () => {
  const asis = circleInline(5, 4)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 10, inline size: 2', () => {
  const asis = circleInline(10, 2)
  const tobe = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('Circle size: 11, inline size: 2', () => {
  const asis = circleInline(11, 2)
  const tobe = [
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})
