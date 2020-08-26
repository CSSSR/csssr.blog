import calculatePageNumberByPostIndex from '../calculatePageNumberByPostIndex'

test('calculatePageNumberByPostIndex', () => {
  expect(calculatePageNumberByPostIndex(0)).toEqual('1')
  expect(calculatePageNumberByPostIndex(1)).toEqual('1')
  expect(calculatePageNumberByPostIndex(2)).toEqual('1')
  expect(calculatePageNumberByPostIndex(3)).toEqual('1')
  expect(calculatePageNumberByPostIndex(4)).toEqual('1')
  expect(calculatePageNumberByPostIndex(5)).toEqual('1')
  expect(calculatePageNumberByPostIndex(6)).toEqual('1')
  expect(calculatePageNumberByPostIndex(7)).toEqual('1')
  expect(calculatePageNumberByPostIndex(8)).toEqual('2')
  expect(calculatePageNumberByPostIndex(9)).toEqual('2')
  expect(calculatePageNumberByPostIndex(10)).toEqual('2')
  expect(calculatePageNumberByPostIndex(15)).toEqual('2')
  expect(calculatePageNumberByPostIndex(16)).toEqual('3')
  expect(calculatePageNumberByPostIndex(17)).toEqual('3')
  expect(calculatePageNumberByPostIndex(1234)).toEqual('155')
})
