import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/profil/keyCards.module.css'
import caloriesicon from '../assets/calories-icon.svg'
import carbsicon from '../assets/carbs-icon.svg'
import faticon from '../assets/fat-icon.svg'
import proteinicon from '../assets/protein-icon.svg'

/**
 * Data Key card information
 * @param {object} props.userKeyData
 * @returns {JSX}
 */
function KeyCards(props) {
  const userKeyData = props.userKeyData

  const calories = userKeyData.calorieCount
  const proteines = userKeyData.proteinCount
  const glucides = userKeyData.carbohydrateCount
  const lipides = userKeyData.lipidCount

  return (
    <section className={styles.keyCards}>
      <p>
        <img src={caloriesicon} alt="icon calories" />
        <span className={styles.nb}>
          {calories} kCal
          <span className={styles.title}>Calories</span>
        </span>
      </p>
      <p>
        <img src={proteinicon} alt="icon Proteines" />
        <span className={styles.nb}>
          {proteines} g<span className={styles.title}>Proteines</span>
        </span>
      </p>
      <p>
        <img src={carbsicon} alt="icon Glucides" />
        <span className={styles.nb}>
          {glucides} g<span className={styles.title}>Glucides</span>
        </span>
      </p>
      <p>
        <img src={faticon} alt="icon Lipides" />
        <span className={styles.nb}>
          {lipides} g<span className={styles.title}>Lipides</span>
        </span>
      </p>
    </section>
  )
}

KeyCards.propTypes = {
  userKeyData: PropTypes.object.isRequired,
}

export default KeyCards
