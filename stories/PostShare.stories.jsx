import React from 'react'
import PostShare from '../components/PostShare'

const Template = (args) => <PostShare {...args} />

export const Primary = Template.bind({})

export default {
  title: 'Common/PostShare',
}

Primary.args = { type: 'regular', language: 'ru', isHideShareLinksOnMobile: true }

Primary.argTypes = {
  type: { control: { type: 'select', options: ['regular', 'news'] } },
  language: { control: { type: 'select', options: ['ru', 'en'] } },
}
