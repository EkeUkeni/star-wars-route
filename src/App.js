import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Films from './Components/Films'
import Details404 from './Details404'
import Movies from './Components/Movies'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Films/>}/>
        <Route path='/movies' element={<Movies/>}/>

        {/* * - wildcard */}
        <Route path='*' element={<Details404 />} />
    </Routes>
  )
}

export default App