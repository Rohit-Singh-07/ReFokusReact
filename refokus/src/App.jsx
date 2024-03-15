import React from 'react'
import NavBar from './components/NavBar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

const App = () => {
  return (
    <div className='min-h-screen bg-zinc-900 overflow-y-hidden'>
      <NavBar/>
      <Work></Work>
      <Stripes></Stripes>
      <Products></Products>
    </div>
  )
}

export default App
