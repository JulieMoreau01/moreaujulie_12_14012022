import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from '../src/styles/index.module.css'
import Header from '../src/components/Header'
import Profil from '../src/pages/Profil'
import ProfilMock from '../src/pages/ProfilMock'
import Accueil from '../src/pages/Accueil'
import Error from '../src/pages/Error'
import NavigationLeft from '../src/components/NavigationLeft'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <NavigationLeft />
      <Routes>
        <Route path="/Profil/:id" element={<Profil />} />
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
)
