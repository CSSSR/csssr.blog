import getPageNumbers from '../getPageNumbers'

test('getPageNumbers', () => {
  expect(getPageNumbers(1, 1)).toEqual([1])

  expect(getPageNumbers(1, 2)).toEqual([1, 2])
  expect(getPageNumbers(2, 2)).toEqual([1, 2])

  expect(getPageNumbers(0, 0)).toEqual([])
  expect(getPageNumbers(0, 1)).toEqual([])
  expect(getPageNumbers(0, 2)).toEqual([])
  expect(getPageNumbers(1, 0)).toEqual([])
  expect(getPageNumbers(10, 0)).toEqual([])

  expect(getPageNumbers(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  expect(getPageNumbers(2, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  expect(getPageNumbers(7, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])

  expect(getPageNumbers(1, 8)).toEqual([1, 2, 3, 4, 5, '...', 8])
  expect(getPageNumbers(2, 8)).toEqual([1, 2, 3, 4, 5, '...', 8])
  expect(getPageNumbers(3, 8)).toEqual([1, 2, 3, 4, 5, '...', 8])
  expect(getPageNumbers(4, 8)).toEqual([1, 2, 3, 4, 5, '...', 8])
  expect(getPageNumbers(5, 8)).toEqual([1, '...', 4, 5, 6, 7, 8])
  expect(getPageNumbers(6, 8)).toEqual([1, '...', 4, 5, 6, 7, 8])
  expect(getPageNumbers(7, 8)).toEqual([1, '...', 4, 5, 6, 7, 8])
  expect(getPageNumbers(8, 8)).toEqual([1, '...', 4, 5, 6, 7, 8])

  expect(getPageNumbers(4, 9)).toEqual([1, 2, 3, 4, 5, '...', 9])
  expect(getPageNumbers(5, 9)).toEqual([1, '...', 4, 5, 6, '...', 9])
  expect(getPageNumbers(6, 9)).toEqual([1, '...', 5, 6, 7, 8, 9])

  expect(getPageNumbers(1, 20)).toEqual([1, 2, 3, 4, 5, '...', 20])
  expect(getPageNumbers(2, 20)).toEqual([1, 2, 3, 4, 5, '...', 20])
  expect(getPageNumbers(3, 20)).toEqual([1, 2, 3, 4, 5, '...', 20])
  expect(getPageNumbers(4, 20)).toEqual([1, 2, 3, 4, 5, '...', 20])
  expect(getPageNumbers(5, 20)).toEqual([1, '...', 4, 5, 6, '...', 20])
  expect(getPageNumbers(6, 20)).toEqual([1, '...', 5, 6, 7, '...', 20])
  expect(getPageNumbers(10, 20)).toEqual([1, '...', 9, 10, 11, '...', 20])

  expect(getPageNumbers(15, 20)).toEqual([1, '...', 14, 15, 16, '...', 20])
  expect(getPageNumbers(16, 20)).toEqual([1, '...', 15, 16, 17, '...', 20])
  expect(getPageNumbers(17, 20)).toEqual([1, '...', 16, 17, 18, 19, 20])
  expect(getPageNumbers(18, 20)).toEqual([1, '...', 16, 17, 18, 19, 20])
  expect(getPageNumbers(19, 20)).toEqual([1, '...', 16, 17, 18, 19, 20])
  expect(getPageNumbers(20, 20)).toEqual([1, '...', 16, 17, 18, 19, 20])
})
