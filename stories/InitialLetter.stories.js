import React from 'react'
import PostWrap from './decorators/PostWrap'
import { compilerMdx } from '../components/Post/Body/utils/compilerMdx'

const Template = ({ content, language }) => (
  <PostWrap language={language}>{compilerMdx({ content })}</PostWrap>
)

export const ru = Template.bind({})

ru.args = {
  language: 'ru',
  content: `**М**ы выяснили, что некоторые из вещей, которые кажутся нам куда более поздним изобретением (например, таблицы стилей, встроенный в HTML-страницу JavaScript-код, вкладки, отображение PDF и многое другое), в начале 90-х не только обсуждались, но и были реализованы на практике. Мало того, оказалось, что рядом с корявым юным вебом процветал мир «офлайн-гипермедиа». И царил в нём HyperCard — система, где можно было создавать нечто вроде media-rich веб-сайтов, со сложнейшими встроенными скриптами и анимацией… только вот доступных лишь с местного носителя. Именно HyperCard вдохновил вундеркинда по имени Пэй-Юань Вэй создать такой же могучий гипермедиа-браузер со скриптами, только в Интернете. Но тут ошеломляющий успех браузера Mosaic похоронил всех конкурентов — и история веба пошла своим путём, снова вернувшись к подобным технологиям лишь в следующие 10 лет.
`,
}

ru.argTypes = {
  language: { control: { type: 'select', options: ['ru', 'en'] } },
}

export const en = Template.bind({})

en.args = {
  language: 'en',
  content: `**In**this digital era, a **website** comprising various UI/UX elements and features can reveal the ocean of opportunities and become even more effective and engaging. UI/UX  components and technologies not only make a website look great but also secure the brand’s marketing goals.
`,
}

en.argTypes = {
  language: { control: { type: 'select', options: ['en', 'ru'] } },
}
