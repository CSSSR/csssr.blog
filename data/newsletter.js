const defaultReaderImages = require.context('../public/components/newsletter/defaultReader')
const postReaderImages = require.context('../public/components/newsletter/postReader')

export const newsletterData = {
  title: 'Подпишитесь на ежемесячную рассылку CSSSR',
  subtitle:
    'Свежие статьи, подкасты, новости <span style="white-space: nowrap">веб-разработки</span>, вакансии и интересные события. Никакого спама. Только по делу.',
  img: defaultReaderImages,
  imgAlt: 'Иллюстрация человека, читающего газету',
}

export const postNewsletterData = {
  title: 'Ежемесячная рассылка CSSSR',
  subtitle: 'Новости, свежие статьи и многое другое',
  img: postReaderImages,
  imgAlt: 'Иллюстрация говорящего человека',
}
