const { addNewPost } = require('./addNewPost')

describe('addNewPost', () => {
  it('добавляет новый пост', () => {
    const result = addNewPost(
      [
        // page 1
        ['post1.1', 'news512'],
        ['post1.2', 'post1.3'],
        ['post1.4', 'post1.5'],
        ['post1.6', 'post1.7'],
        // page 2
        ['post2.1', 'news512'],
        ['post2.2', 'post2.3'],
        ['post2.4', 'post2.5'],
        ['post2.6', 'post2.7'],
        // page 3
        ['post3.1', 'news512'],
        ['post3.2', 'post3.3'],
        ['post3.4', 'post3.5'],
        ['post3.6', 'post3.7'],
        // page 4
        ['post4.1', 'post4.2'],
        ['post4.3', 'post4.4'],
        ['post4.5', 'post4.6'],
      ],
      'NEW_POST',
    )

    const expected = [
      // page 1
      ['NEW_POST', 'news512'],
      ['post1.1', 'post1.2'],
      ['post1.3', 'post1.4'],
      ['post1.5', 'post1.6'],
      // page 2
      ['post1.7', 'news512'],
      ['post2.1', 'post2.2'],
      ['post2.3', 'post2.4'],
      ['post2.5', 'post2.6'],
      // page 3
      ['post2.7', 'news512'],
      ['post3.1', 'post3.2'],
      ['post3.3', 'post3.4'],
      ['post3.5', 'post3.6'],
      // page 4
      ['post3.7', 'post4.1'],
      ['post4.2', 'post4.3'],
      ['post4.4', 'post4.5'],
      ['post4.6'],
    ]

    expect(result).toEqual(expected)
  })
})
