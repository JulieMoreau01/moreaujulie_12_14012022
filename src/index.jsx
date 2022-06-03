import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, HashRouter } from 'react-router-dom'
import '../src/styles/index.module.css'
import Header from '../src/components/Header'
import Profil from '../src/pages/Profil'
import ProfilMock from '../src/pages/ProfilMock'
import Accueil from '../src/pages/Accueil'
import Error from '../src/pages/Error'
import NavigationLeft from '../src/components/NavigationLeft'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <NavigationLeft />
      <Routes>
        <Route path="/Profil/:id" element={<Profil />} />
        <Route path="/ProfilMock/:id" element={<ProfilMock />} />
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,

  document.getElementById('root')
)
