import React from 'react'
import icon from '../assets/navlicon.svg'
import icon2 from '../assets/navlicon2.svg'
import icon3 from '../assets/navlicon3.svg'
import icon4 from '../assets/navlicon4.svg'
import styles from '../styles/navigationLeft.module.css'

/**
 * Component - Display Navigation Left
 * @returns {JSX}
 */
function NavigationLeft() {
  return (
    <nav className={styles.navigationLeft}>
      <ul>
        <li>
          <figure>
            <img src={icon} alt="logo SportSee" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={icon2} alt="logo SportSee" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={icon3} alt="logo SportSee" />
          </figure>
        </li>
        <li>
          <figure>
            <img src={icon4} alt="logo SportSee" />
          </figure>
        </li>
      </ul>
      <p>Copiryght, SportSee 2020</p>
    </nav>
  )
}

export default NavigationLeft
