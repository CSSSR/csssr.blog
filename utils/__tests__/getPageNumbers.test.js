import getPageNumbers from '../getPageNumbers'

test('getPageNumbers', () => {
  expect(getPageNumbers(0, 0)).toEqual([])
  expect(getPageNumbers(0, 1)).toEqual([1]) // Здесь не должно ли быть пустого массива?
  expect(getPageNumbers(1, 1)).toEqual([1]) // Здесь не должно ли быть пустого массива?
  expect(getPageNumbers(0, 2)).toEqual([1, 2])
  expect(getPageNumbers(1, 2)).toEqual([1, 2])
  expect(getPageNumbers(2, 2)).toEqual([1, 2])
  // TODO
})
