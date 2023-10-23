import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import CatalogueItems from './pages/CatalogueItems/CatalogueItems'
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/item' element={<CatalogueItems/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Routing
