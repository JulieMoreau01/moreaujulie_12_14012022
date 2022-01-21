import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/header.module.css'

/**
 * Component - Header
 * @param {logo} SportSeeLogo
 * @returns <Header> <img> <nav>
 */
function Header() {
  return (
    <header>
      <figure>
        <img src={logo} alt="logo SportSee" />
      </figure>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Profil/:id">Profil</Link>
          </li>
          <li>
            <Link to="">Réglage</Link>
          </li>
          <li>
            <Link to="">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
