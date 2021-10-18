import { circle, circleOutline } from './circle'

test('diameter is 0', () => {
  expect(() => {
    circle(0)
  }).toThrowError('Circle length should be more than 1')
})
test('diameter is 1', () => {
  const asis = circle(1)
  const tobe = [[1]]
  expect(asis).toStrictEqual(tobe)
})

test('diameter is 2', () => {
  const asis = circle(2)
  const tobe = [
    [1, 1],
    [1, 1],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('diameter is 3', () => {
  const asis = circle(3)
  const tobe = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('diameter is 4', () => {
  expect(circle(4)).toStrictEqual([
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
})
test('diameter is 11', () => {
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

test('circle outline: length 0, outline width: 0', () => {
  expect(() => {
    circleOutline(0, 0)
  }).toThrowError('Circle length or outline width should be more than 1')
})

test('circle outline: length 1, outline width: 0', () => {
  expect(() => {
    circleOutline(1, 0)
  }).toThrowError('Circle length or outline width should be more than 1')
})

test('circle outline: length 1, outline width: 1', () => {
  const tobe = [[1]]
  expect(circleOutline(1, 1)).toStrictEqual(tobe)
})
test('circle outline: length 1, outline width: 1', () => {
  const tobe = [[1]]
  expect(circleOutline(1, 1)).toStrictEqual(tobe)
})

test('circle outline: length 3, outline width: 1', () => {
  const asis = circleOutline(3, 1)
  const tobe = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('circle outline: length 4, outline width: 1', () => {
  const asis = circleOutline(4, 1)
  const tobe = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})
test('circle outline: length 5, outline width: 1', () => {
  const asis = circleOutline(5, 1)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('circle outline: length 5, outline width: 2', () => {
  const asis = circleOutline(5, 2)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('circle outline: length 5, outline width: 3', () => {
  const asis = circleOutline(5, 3)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})
test('circle outline: length 5, outline width: 4', () => {
  const asis = circleOutline(5, 4)
  const tobe = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ]
  expect(asis).toStrictEqual(tobe)
})

test('circle outline: length 10, outline width: 2', () => {
  const asis = circleOutline(10, 2)
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

test('circle outline: length 11, outline width: 2', () => {
  const asis = circleOutline(11, 2)
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
