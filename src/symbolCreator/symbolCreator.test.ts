import { Circle } from '../circle'
import { Diamond } from '../diamond'
import { Square } from '../square'
import { Triangle } from '../triangle'
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

test('type is circle', () => {
  expect(symbolCreator.createSymbol('circle', 10, 1)).toBeInstanceOf(Circle)
})

test('type is square', () => {
  expect(symbolCreator.createSymbol('square', 10, 1)).toBeInstanceOf(Square)
})

test('type is triangle', () => {
  expect(symbolCreator.createSymbol('triangle', 10, 1)).toBeInstanceOf(Triangle)
})

test('type is diamond', () => {
  expect(symbolCreator.createSymbol('diamond', 10, 1)).toBeInstanceOf(Diamond)
})

test('type is unknown', () => {
  expect(() => {
    symbolCreator.createSymbol('unknown type' as 'circle', 10, 1).toArray()
  }).toThrowError('Unexpected symbol type')
})
