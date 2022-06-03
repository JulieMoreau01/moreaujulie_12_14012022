import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/accueil.module.css'

/**
 * HOME PAGE
 * @returns {JSX}
 */
function Accueil() {
  return (
    <section className={styles.accueil}>
      <ul>
        <li>
          <Link to="profilMock/18"> USER 18 MOCK</Link>
        </li>
        <li>
          <Link to="profilMock/12"> USER 12 MOCK</Link>
        </li>
        {/* <li>
          <Link to="profil/18"> USER 18 API</Link>
        </li>
        <li>
          <Link to="profil/12"> USER 12 API</Link>
        </li> */}
      </ul>
    </section>
  )
}

export default Accueil
