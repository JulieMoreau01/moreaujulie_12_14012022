import React from 'react'
import { Link } from 'react-router-dom'

/**
 * HOME PAGE
 * @returns <section>
 */
function Accueil() {
  return (
    <section>
      <ul>
        <li>
          <Link to="profil/18?mock"> USER 18 MOCK</Link>
        </li>
        <li>
          <Link to="profil/12?mock"> USER 12 MOCK</Link>
        </li>
        <li>
          <Link to="profil/18?api"> USER 18 API</Link>
        </li>
        <li>
          <Link to="profil/12?api"> USER 12 API</Link>
        </li>
      </ul>
    </section>
  )
}

export default Accueil
