import React from 'react'
import NavBar from './components/NavBar'
import Work from './components/Work'
import Stripes from './components/Stripes'

const App = () => {
  return (
    <div className='min-h-screen bg-zinc-900'>
      <NavBar/>
      <Work></Work>
      <Stripes></Stripes>
    </div>
  )
}

export default App
