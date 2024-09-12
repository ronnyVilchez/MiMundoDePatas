
import React from 'react'
import { Home } from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

import { PageFood } from './Pages/PageFood'
import { PageHealtf } from './Pages/PageHealtf'
import { PageAccs } from './Pages/PageAccs'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/food' element={<PageFood />} />
      <Route path='/health' element={<PageHealtf />} />
      <Route path='/accesories' element={<PageAccs />} />
    </Routes>

  )
}
