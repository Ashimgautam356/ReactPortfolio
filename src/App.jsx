import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Aboutme from './pages/Aboutme'
import Project from './pages/Project'
import Service from './pages/Service'
import Contact from './pages/Contact'
import './App.sass'
import './style/Responsive.sass'
import {HashRouter, Routes, Route}from 'react-router-dom'
const App = () => {
  return (
    <HashRouter >
      <Nav></Nav>
      <Routes>
        <Route path='/' element={ <Hero></Hero> }></Route>
        <Route path='/aboutme' element={<Aboutme></Aboutme>}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  )
}

export default App