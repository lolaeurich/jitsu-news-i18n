import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import {BsGlobeAmericas} from "react-icons/bs"

import {useTranslation} from "react-i18next"
import "../lib/i18n"
import { useState } from 'react'


function BlogContent({blogs}) {
 

  return (
    <div>
        <Header />
        <Content blogs={blogs}/>
        <Footer />
    </div>
  )
}


export default BlogContent