const defaultReaderImages = require.context('../public/components/newsletter/defaultReader')
const postReaderImages = require.context('../public/components/newsletter/postReader')

export default {
  title: 'Подпишитесь на ежемесячную рассылку CSSSR',
  titlePost: 'Будь в курсе',
  subtitle:
    'Свежие статьи, подкасты, новости веб-разработки, вакансии и интересные события. Никакого спама. Только по делу.',
  subtitlePost:
    'Каждый месяц cвежие статьи, подкасты, новости веб-разработки, вакансии и интересные события. Никакого спама. Только по делу.',
  img: defaultReaderImages,
  postImg: postReaderImages,
  imgAlt: 'Иллюстрация человека, читающего газету',
}
