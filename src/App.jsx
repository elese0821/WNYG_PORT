import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Main from './page/Main'
import Three from './page/Three'




const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <Three />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Main>
    </BrowserRouter>

  )
}

export default App