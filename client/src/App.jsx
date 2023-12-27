import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Main from './page/Main'
import Three from './page/Three'
import Teamreact from './components/Teamreact'
import Youtube from './components/Youtube'
import Movie from './components/Movie'
import Teamphp from './components/Teamphp'
import Blog from './components/Blog'
import Js from './components/Js'
import Contact from './components/Contact'
import Teamquiz from './components/Teamquiz'


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