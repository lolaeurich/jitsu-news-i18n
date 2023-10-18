import React from 'react'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'

function Home() {
  return (
    <div>
        <Header />
        <Search />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home