import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Main from './page/Main'
import Three from './page/Three'
import Stacks from './components/Stacks'
import Teamreact from './components/Teamreact'
import Teamphp from './components/Teamphp'
import Youtube from './components/Youtube'
import Movie from './components/Movie'
import Blog from './components/Blog'
import Site from './components/Site'
import Contact from './components/Contact'


const App = () => {
  return (
    <Main>
      <Three />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/stacks' element={<Stacks />} />
          <Route path='/teamreact' element={<Teamreact />} />
          <Route path='/teamphp' element={<Teamphp />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/site' element={<Site />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Main >

  )
}

export default App