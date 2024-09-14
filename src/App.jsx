
import React from 'react'
import { Home } from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

import { PageFood } from './Pages/PageFood'
import { PageHealtf } from './Pages/PageHealtf'
import { PageAccs } from './Pages/PageAccs'
import { VetAppointmentForm } from './Components/Form'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/food' element={<PageFood />} />
      <Route path='/health' element={<PageHealtf />} />
      <Route path='/accesories' element={<PageAccs />} />
      <Route path='/schedule' element={<VetAppointmentForm />} />
    </Routes>

  )
}
