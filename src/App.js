import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Films from './Components/Films'
import NotFound from './NotFound'
import Movies from './Components/Movies'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Films/>}/>
        <Route path='/movies' element={<Movies/>}/>
        
        {/* * - wildcard */}
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App