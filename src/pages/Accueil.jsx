import React from 'react'
import { Link } from 'react-router-dom'

function Accueil() {
  return (
    <section>
      <ul>
        <li>
          <Link to="profil/18"> KARL MOCK</Link>
        </li>
        <li>
          <Link to="profil/12"> GIRL MOCK</Link>
        </li>
        <li>
          <Link to="profil/18"> KARL API</Link>
        </li>
        <li>
          <Link to="profil/12"> GIRL API</Link>
        </li>
      </ul>
    </section>
  )
}

export default Accueil
