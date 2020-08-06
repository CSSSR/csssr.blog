export default (activePageNumber, numberOfPages) => {
  let result = []
  const pageNumbers = Array.from(Array(numberOfPages + 1).keys()).slice(1)
  const sliceAmount = activePageNumber < 5 ? 5 : activePageNumber + 1
  const sliceStart = activePageNumber < 5 ? 0 : activePageNumber - 2

  // если активная страница больше количества страниц или меньше-равна 0, то возвращаем пустой массив
  if (activePageNumber > numberOfPages || activePageNumber <= 0) {
    return []
  }

  // если у нас меньше 7 страниц, то у нас нет возможности поставить троеточие
  if (pageNumbers.length <= 7) {
    result = pageNumbers

    return result
  }
  // если у нас больше 7 страниц, и текущая страница больше или равна 5,
  // то ставим троеточие в начале
  if (activePageNumber >= 5) {
    // вырезаем соседние цифры с текущей страницей,
    // если разница между текущей и последней странице больше или равна 4
    if (pageNumbers.length - activePageNumber >= 4) {
      result = [1, '...', ...pageNumbers.slice(sliceStart, sliceAmount)]
    } else {
      // вырезаем последние пять цифр,
      // если разница между текущей и последней странице меньше или не равна 4
      result = [1, '...', ...pageNumbers.slice(-5)]
    }
  }

  // если у нас больше 7 страниц, и разница между текущей и последней страницей больше или равна 4,
  // то
  if (pageNumbers.length - activePageNumber >= 4) {
    // ставим троеточие в начале и в конце, если страница при этом больше или равна 5
    if (activePageNumber >= 5) {
      result = [
        ...result.slice(0, 2),
        ...pageNumbers.slice(sliceStart, sliceAmount),
        '...',
        pageNumbers.length,
      ]
    } else {
      // ставим троеточие в конце, если страница меньше 5
      result = [...pageNumbers.slice(sliceStart, sliceAmount), '...', pageNumbers.length]
    }
  }

  return result
}
