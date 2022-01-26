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
          <Link to="profil/18"> USER 18 MOCK</Link>
        </li>
        <li>
          <Link to="profil/12"> USER 12 MOCK</Link>
        </li>
      </ul>
    </section>
  )
}

export default Accueil
