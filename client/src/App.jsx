import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Main from './page/Main'
import Three from './page/Three'
import Teamreact from './components/project/Teamreact.jsx'
import Youtube from './components/project/Youtube.jsx'
import Movie from './components/project/Movie.jsx'
import Teamphp from './components/project/Teamphp.jsx'
import Blog from './components/project/Blog.jsx'
import Js from './components/project/Js.jsx'
import Contact from './components/Contact'
import Teamquiz from './components/project/Teamquiz.jsx'


const App = () => {
  return (
    <Main>
      <Three />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/teamreact' element={<Teamreact />} />
        <Route path='/teamquiz' element={<Teamquiz />} />
        <Route path='/teamphp' element={<Teamphp />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/js' element={<Js />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </Main >

  )
}

export default App