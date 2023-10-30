import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import {BsGlobeAmericas} from "react-icons/bs"

import {useTranslation} from "react-i18next"
import "../lib/i18n"
import { useState } from 'react'


function BlogContent({blogs}) {
  const {t, i18n: {changeLanguage, language}} = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'

    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  return (
    <div>
      <div className="flex flex-row-reverse items-center mx-12 my-4 h-[0.75rem]">
            <button type='button' onClick={handleChangeLanguage} className="bg-green-500 rounded-full text-black font-bold flex items-center justify-center text-[10px]">{t('en')}<BsGlobeAmericas className="ml-1 text-[12px]"/></button>
        </div>
        <Header about={t('about')} contact={t('contact')} subscribe={t('subscribe')}/>
        <Content blogs={blogs}/>
        <Footer />
    </div>
  )
}


export default BlogContent