import areEqualShallow from '../areEqualShallow'

test('areEqualShallow', () => {
  expect(areEqualShallow({}, {})).toEqual(true)
  expect(areEqualShallow({ a: 1 }, {})).toEqual(false)
  expect(areEqualShallow({}, { a: 1 })).toEqual(false)
  expect(areEqualShallow({ a: 1 }, { a: 1 })).toEqual(true)
  expect(areEqualShallow({ b: 1 }, { a: 1 })).toEqual(false)
  expect(areEqualShallow({ a: 1 }, { b: 1 })).toEqual(false)
  expect(areEqualShallow({ b: 1 }, { b: 1 })).toEqual(true)
  expect(areEqualShallow({ b: 1 }, { b: 2 })).toEqual(false)
  expect(areEqualShallow({ a: 1, b: 2 }, { b: 2, a: 1 })).toEqual(true)
  expect(areEqualShallow({ a: 1, b: 2, c: 3 }, { b: 2, a: 1 })).toEqual(false)
  expect(areEqualShallow({ a: 1, b: 2 }, { b: 2, a: 1, c: 3 })).toEqual(false)
})
