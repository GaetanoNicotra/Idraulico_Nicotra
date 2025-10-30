import { useState } from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayouts from './layouts/DefaultLayouts'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />} >
            <Route path='/' element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
