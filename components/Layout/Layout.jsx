import React, { useState, Fragment } from 'react'
import { Global } from '@emotion/react'
import Meta from '../Meta'
import styles, { dynamicFooterStyles } from './Layout.styles'
import { Header } from '@csssr/core-design'
import CookiesPopup from '../CookiesPopup'
import FooterWrapper from '../FooterWrapper'

const presetByLanguage = {
  en: 'defaultEn',
  ru: 'defaultRu',
}

export default function Layout({ children, language, type }) {
  const [isBottomPosition, setBottomPossition] = useState(false)

  const childrenWithExtraProp = React.cloneElement(children, {isBottomPosition});

  return (
    <>
      <Meta type={type} />

      <Header
        preset={presetByLanguage[language]}
        logo={{
          testId: 'Header:link.logo',
          href: `https://csssr.com/${language}`,
          type: 'default',
        }}
      />
      <main id="main" className="main">
        {childrenWithExtraProp}
      </main>

      <FooterWrapper 
        className="footer" 
        preset={presetByLanguage[language]} 
        language={language} 
        type={type} 
        setBottomPossition={setBottomPossition}
      />

      <CookiesPopup language={language} />

      <Global styles={styles} />
      {language === 'ru' &&
        <Global styles={dynamicFooterStyles} />
      }
    </>
  )
}
