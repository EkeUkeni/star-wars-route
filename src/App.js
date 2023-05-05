import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Films from './Components/Films'
import Details404 from './Details404'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Films/>}/>

        {/* * - wildcard */}
        <Route path='*' element={<Details404 />} />
    </Routes>
  )
}

export default App