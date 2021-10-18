import { circle2array } from './circle'

test('diameter is 0', () => {
    expect(() => {
        circle2array(0)
    }).toThrowError('Circle diameter should be more than 3')
})
test('diameter is 1', () => {
    expect(() => {
        circle2array(1)
    }).toThrowError('Circle diameter should be more than 3')
})
test('diameter is 2', () => {
    expect(() => {
        circle2array(1)
    }).toThrowError('Circle diameter should be more than 3')
})
test('diameter is 3', () => {
    const asis = circle2array(3)
    const tobe = [
        [ 0, 1, 0 ],
        [ 1, 1, 1 ],
        [ 0, 1, 0 ]
    ]
    expect(asis).toStrictEqual(tobe)
})

test('diameter is 4', () => {
    expect(circle2array(4)).toStrictEqual(
        [
            [ 0, 0, 0, 0 ],
            [ 0, 1, 1, 0 ],
            [ 0, 1, 1, 0 ],
            [ 0, 0, 0, 0 ]
        ]
    )
})
