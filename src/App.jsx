import { useState } from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayouts from './layouts/DefaultLayouts'
import ImpiantiPage from './pages/ImpiantiPage'
import BagniPage from './pages/BagniPage'
import BoxPage from './pages/BoxPage'
import AutoclaviPage from './pages/AutoclaviPage'
import ContatoriPage from './pages/ContatoriPage'
import RistrutturazioniPage from './pages/RistrutturazioniPage'
import ContattiPages from './pages/ContattiPages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />} >
            <Route path='/' element={<Homepage />} />
            <Route path='/pageImpianti' element={<ImpiantiPage />} />
            <Route path='/pagina-Bagni' element={<BagniPage />} />
            <Route path='/pagina-Box-doccia' element={<BoxPage />} />
            <Route path='/pagina-Autoclavi' element={<AutoclaviPage />} />
            <Route path='/pagina-Contatori' element={<ContatoriPage />} />
            <Route path='/pagina-Ristrutturazioni' element={<RistrutturazioniPage />} />
            <Route path='/pagina-Contatti' element={<ContattiPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
