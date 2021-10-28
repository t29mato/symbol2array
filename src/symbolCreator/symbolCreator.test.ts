import { SymbolCreator } from './symbolCreator'

const symbolCreator = new SymbolCreator()

test('circle size: 0, inline size: 0', () => {
  expect(() => {
    symbolCreator.createSymbol('circle', 0, 0).toArray()
  }).toThrowError('array size should be more than 1.')
})

test('square size: 10, inline size: -10', () => {
  expect(() => {
    symbolCreator.createSymbol('square', 10, -10).toArray()
  }).toThrowError('inline size should be more than 0.')
})

test('square size: 0, inline size: 0', () => {
  expect(() => {
    symbolCreator.createSymbol('square', 0, 0).toArray()
  }).toThrowError('array size should be more than 1.')
})

test('triangle size: 10, inline size: -10', () => {
  expect(() => {
    symbolCreator.createSymbol('triangle', 10, -10).toArray()
  }).toThrowError('inline size should be more than 0.')
})

test('triangle size: 0, inline size: 0', () => {
  expect(() => {
    symbolCreator.createSymbol('triangle', 0, 0).toArray()
  }).toThrowError('array size should be more than 1.')
})

test('diamond size: 10, inline size: -10', () => {
  expect(() => {
    symbolCreator.createSymbol('diamond', 10, -10).toArray()
  }).toThrowError('inline size should be more than 0.')
})

test('diamond size: 0, inline size: 0', () => {
  expect(() => {
    symbolCreator.createSymbol('diamond', 0, 0).toArray()
  }).toThrowError('array size should be more than 1.')
})
