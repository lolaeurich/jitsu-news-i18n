import BlogContent from './pages/BlogContent'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import useFetch from "./hooks/useFetch"
import {useTranslation} from "react-i18next"

function App() {
  const {t, i18n: {changeLanguage, language}} = useTranslation()

  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*')
  // let {loading, data, error} = useFetch(language === 'pt' ? 'http://localhost:1337/api/blogs' : 'http://localhost:1337/api/blogs/?locale=en')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>
  
  console.log('app', data.data[0].attributes.loc);

  const ptBlog = data.data.filter(blog => blog.attributes.loc === 'pt')
  const enBlog = data.data.filter(blog => blog.attributes.loc === 'en')
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home blogs={language === 'pt' ? ptBlog : enBlog} />}></Route>
        <Route path='/blog/:id' element={<BlogContent blogs={data.data}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
