import Head from 'next/head'
import { arrayOf, number, object, shape, string } from 'prop-types'
import React from 'react'

import myImageData from '../../public/images/og/main/desktop.m.png'
import getOgImage from '../../utils/client/getOgImage'
import Layout from '../Layout'
import Newsletter from '../Newsletter'

import Categories from './Categories'
import LatestNews from './LatestNews'
import Pagination from './Pagination/Pagination'
import Posts from './Posts'
import SelectedPosts from './SelectedPosts'

const meta = {
  en: {
    title: 'Blog | CSSSR',
    description:
      'Place where we are sharing our thoughts on different topics such as web development, management and remote work culture.',
  },
  ru: {
    title: 'Блог | CSSSR',
    description:
      'Место, где мы делимся своими мыслями на разные темы: веб разработка, менеджмент и культура удаленной работы. ',
  },
}

const MainPage = ({
  posts,
  categories,
  totalNumberOfPosts,
  activeCategory,
  activePageNumber,
  language,
  latestNews,
  selectedPosts,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => {
  const isLanguageRu = language === 'ru'

  return (
    <>
      <Head>
        <title>{meta[language].title}</title>
        <meta name="description" content={meta[language].description} />
        <meta property="og:title" content={meta[language].title} />
        <meta property="og:description" content={meta[language].description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.BLOG_HOST}/${language}`} />
        <meta property="og:image" content={getOgImage(myImageData)} />
      </Head>
      <Layout language={language}>
        <h1 className="visual-hidden">{meta[language].title}</h1>

        <Categories items={categories} language={language} activeCategory={activeCategory} />

        {selectedPosts && <SelectedPosts posts={selectedPosts} language={language} />}

        {isLanguageRu && <LatestNews latestNews={latestNews} />}

        <Posts
          language={language}
          posts={posts}
          BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
          BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
        />

        <Pagination
          language={language}
          activeCategory={activeCategory}
          activePageNumber={activePageNumber}
          totalNumberOfPosts={totalNumberOfPosts}
        />

        {isLanguageRu && (
          <Newsletter
            language={language}
            BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
            BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
          />
        )}
      </Layout>
    </>
  )
}

MainPage.propTypes = {
  posts: arrayOf(
    shape({
      title: string,
      coverImageAlt: string,
      images: object,
      slug: string,
      date: string,
      tag: string,
    }),
  ),
  selectedPosts: arrayOf(
    shape({
      title: string,
      date: string,
      slug: string,
      content: string,
      tag: string,
      coverImageAlt: string,
      images: object,
    }),
  ),
  latestNews: shape({
    title: string,
    date: string,
    slug: string,
    episodeNumber: number,
  }),

  categories: arrayOf(string),
  totalNumberOfPosts: number,
  activeCategory: string,
  activePageNumber: number,
  language: string,
}

export default MainPage
