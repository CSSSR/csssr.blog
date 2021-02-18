import React, { useState } from 'react'
import { Global } from '@emotion/react'
import Meta from '../Meta'
import styles, { dynamicFooterStyles } from './Layout.styles'
import { Header } from '@csssr/core-design'
import CookiesPopup from '../CookiesPopup'
import FooterWrapper from '../FooterWrapper'
import { Context } from '../../utils/subscribeBlockProvider'

const presetByLanguage = {
  en: 'defaultEn',
  ru: 'defaultRu',
}

export default function Layout({ children, language, type }) {
  const [isBottomPosition, setBottomPosition] = useState(false)

  const SubscribeBlockPositionTheme = React.createContext(isBottomPosition)

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
        <Context.Provider value={{isBottomPosition}}>
          {children}
        </Context.Provider>
      </main>

      <FooterWrapper
        className="footer"
        preset={presetByLanguage[language]}
        language={language}
        type={type}
        setBottomPosition={setBottomPosition}
      />

      <CookiesPopup language={language} />

      <Global styles={styles} />
      {language === 'ru' && <Global styles={dynamicFooterStyles} />}
    </>
  )
}
