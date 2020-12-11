const readerImages = require.context('../public/components/newsletter/reader')
const postReaderImages = require.context('../public/components/newsletter/postReader')

export default {
  title: 'Подпишитесь на ежемесячную рассылку CSSSR',
  titlePost: 'Будь в курсе',
  subtitle:
    'Свежие статьи, подкасты, новости веб-разработки, вакансии и интересные события. Никакого спама. Только по делу.',
  subtitlePost:
    'Каждый месяц cвежие статьи, подкасты, новости веб-разработки, вакансии и интересные события. Никакого спама. Только по делу.',
  img: readerImages,
  postImg: postReaderImages,
  imgAlt: 'Иллюстрация человека, читающего газету',
}
