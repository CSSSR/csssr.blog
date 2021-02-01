/* eslint-disable-next-line */
import React from 'react'
import { ReactComponent as Square } from '../public/icons/header/square.svg'
import { ReactComponent as Triangle } from '../public/icons/header/triangle.svg'
import { ReactComponent as Circle } from '../public/icons/header/circle.svg'
import { ReactComponent as Arc } from '../public/icons/header/arc.svg'
import { ReactComponent as PieChart } from '../public/icons/header/pieChart.svg'
import { ReactComponent as OurProjects } from '../public/icons/header/our-projects.svg'
import { ReactComponent as Bag } from '../public/icons/header/bag.svg'
import { ReactComponent as Computer } from '../public/icons/header/computer.svg'
import { ReactComponent as Message } from '../public/icons/header/message.svg'
import { ReactComponent as CPU } from '../public/icons/header/cpu.svg'
import { ReactComponent as Repeat } from '../public/icons/header/repeat.svg'
import { ReactComponent as LMS } from '../public/icons/header/lms.svg'
import { ReactComponent as Tracker } from '../public/icons/header/tracker.svg'

import { Link } from '@csssr/core-design'

export const links = {
  en: [
    {
      href: '/en',
      title: 'Blog',
      testId: 'Header:link.blog',
      component: Link,
    },
    {
      href: 'https://csssr.com/en/jobs',
      title: 'Careers',
      testId: 'Header:link.careers',
      component: Link,
    },
    {
      href: 'https://csssr.com/en/contacts',
      title: 'Contacts',
      testId: 'Header:link.contacts',
      component: Link,
    },
  ],
  ru: [
    {
      href: '/ru',
      title: 'Блог',
      testId: 'Header:link.blog',
      component: Link,
    },
    {
      href: 'https://csssr.com/ru/jobs',
      title: 'Вакансии',
      testId: 'Header:link.careers',
      component: Link,
    },
    {
      href: 'https://csssr.com/ru/contacts',
      title: 'Контакты',
      testId: 'Header:link.contacts',
      component: Link,
    },
  ],
}

export const menu = {
  en: [
    {
      id: 'services',
      title: 'Services',
      links: [
        {
          id: 'outsourcing',
          icon: Circle,
          title: 'Outsourcing Front-end',
          description: 'Web development to&nbsp;complement core competencies',
          href: 'https://csssr.com/en/service/outsourcing-front-end',
        },
        {
          id: 'backend',
          icon: Arc,
          title: 'Back-end and&nbsp;DevOps',
          description: 'Reliable back-end development and DevOps services.',
          href: 'https://csssr.com/en/service/back-end-and-devops',
        },
        {
          id: 'mvp',
          icon: Square,
          title: 'MVP Development',
          description: 'Development of&nbsp;core functionality for testing purposes.',
          href: 'https://csssr.com/en/service/mvp-development',
        },
        {
          id: 'design',
          icon: Triangle,
          title: 'DesignLab',
          description:
            'Design expertise with a&nbsp;focus on&nbsp;what really matters: users, investors, and revenue.',
          href: 'https://csssr.com/en/service/design',
        },
      ],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      listTitle: 'Clients by industry',
      links: [
        {
          id: 'mediaAndMarketing',
          icon: Message,
          title: 'Media and marketing',
          href: 'https://csssr.com/en/industry/media-and-marketing',
        },
        {
          id: 'eCommerce',
          icon: Bag,
          title: 'E-Commerce',
          href: 'https://csssr.com/en/industry/ecommerce',
        },
        {
          id: 'information',
          icon: Computer,
          title: 'IT industry',
          href: 'https://csssr.com/en/industry/information-technology',
        },
        {
          id: 'fintech',
          icon: PieChart,
          title: 'Fintech',
          href: 'https://csssr.com/en/industry/fintech',
        },
        {
          id: 'ourProjects',
          icon: OurProjects,
          title: 'Our projects',
          description: 'Take a look at solutions we have developed for some of our clients',
          href: 'https://csssr.com/en/projects',
        },
      ],
    },
    {
      id: 'howWeWork',
      title: 'How we work',
      links: [
        {
          id: 'technologies',
          icon: CPU,
          title: 'Technologies',
          description:
            'We&nbsp;keep a&nbsp;careful eye on&nbsp;emerging web development trends and never compromise best practice.',
          href: 'https://csssr.com/en/tech-stack',
        },
        {
          id: 'processes',
          icon: Repeat,
          title: 'Our Process',
          description:
            'Attention to&nbsp;detail and well established business processes differentiate successful projects and those that are just average.',
          href: 'https://csssr.com/en/way-of-work',
        },
      ],
    },
    {
      id: 'solutions',
      title: 'Solutions',
      links: [
        {
          id: 'lms',
          icon: LMS,
          title: 'Modular LMS Platform',
          description:
            'Start you E-Learning business with or&nbsp;LMS. We&nbsp;offer design and development teams to&nbsp;do&nbsp;all the necessary integrations and customization',
          href: 'https://csssr.com/en/solutions/lms',
        },
        {
          id: 'tracker',
          icon: Tracker,
          title: 'Time-tracking Software',
          description:
            'We&rsquo;ve created an&nbsp;app that helps&nbsp;us manage time on&nbsp;our projects. Give it&nbsp;a&nbsp;try',
          href: 'https://tracker.csssr.com',
        },
      ],
    },
  ],
  ru: [
    {
      id: 'services',
      title: 'Услуги',
      links: [
        {
          id: 'outsourcing',
          icon: Circle,
          title: 'Фронтенд аутсорсинг',
          description: 'Работа над веб-проектами для крупных компаний.',
          href: 'https://csssr.com/ru/service/outsourcing-front-end',
        },
        {
          id: 'backend',
          icon: Arc,
          title: 'Бэкенд и&nbsp;DevOps',
          description: 'Разработка полного цикла и&nbsp;настройка окружения.',
          href: 'https://csssr.com/ru/service/back-end-and-devops',
        },
        {
          id: 'mvp',
          icon: Square,
          title: 'Разработка MVP',
          description: 'Ключевой функционал для проверки бизнес-идей.',
          href: 'https://csssr.com/ru/service/mvp-development',
        },
      ],
    },
    {
      id: 'portfolio',
      title: 'Портфолио',
      listTitle: 'Делаем проекты для',
      links: [
        {
          id: 'mediaAndMarketing',
          icon: Message,
          title: 'Медиа и&nbsp;маркетинга',
          href: 'https://csssr.com/ru/industry/media-and-marketing',
        },
        {
          id: 'eCommerce',
          icon: Bag,
          title: 'E-Commerce',
          href: 'https://csssr.com/ru/industry/ecommerce',
        },
        {
          id: 'information',
          icon: Computer,
          title: 'IT-отрасли',
          href: 'https://csssr.com/ru/industry/information-technology',
        },
        {
          id: 'fintech',
          icon: PieChart,
          title: 'Финтеха',
          href: 'https://csssr.com/ru/industry/fintech',
        },
        {
          id: 'ourProjects',
          icon: OurProjects,
          title: 'Наши проекты',
          description: 'Посмотрите на решения для некоторых из наших клиентов',
          href: 'https://csssr.com/ru/projects',
        },
      ],
    },
    {
      id: 'howWeWork',
      title: 'Как мы&nbsp;работаем',
      links: [
        {
          id: 'technologies',
          icon: CPU,
          title: 'Технологии',
          description:
            'Мы&nbsp;внимательно следим за&nbsp;новинками веб-разработки и&nbsp;не&nbsp;забываем про лучшие стандарты.',
          href: 'https://csssr.com/ru/tech-stack',
        },
        {
          id: 'processes',
          icon: Repeat,
          title: 'Процессы',
          description:
            'Отлаженные процессы, опыт и&nbsp;внимание к&nbsp;деталям помогают нам создавать успешные проекты.',
          href: 'https://csssr.com/ru/way-of-work',
        },
      ],
    },
  ],
}
