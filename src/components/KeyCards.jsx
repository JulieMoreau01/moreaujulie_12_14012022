import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/profil/keyCards.module.css'
import caloriesicon from '../assets/calories-icon.svg'
import carbsicon from '../assets/carbs-icon.svg'
import faticon from '../assets/fat-icon.svg'
import proteinicon from '../assets/protein-icon.svg'

/**
 * Data Key card information
 * @param {number} props.keyData
 * @returns {JSX}
 */
function KeyCards(props) {
  const keyData = props.keyData

  const calories = keyData.calorieCount
  const proteines = keyData.proteinCount
  const glucides = keyData.carbohydrateCount
  const lipides = keyData.lipidCount

  return (
    <section className={styles.keyCards}>
      <p>
        <img src={caloriesicon} alt="icon calories" />
        <span className={styles.nb}>
          {calories}
          <span className={styles.title}>Calories</span>
        </span>
      </p>
      <p>
        <img src={proteinicon} alt="icon Proteines" />
        <span className={styles.nb}>
          {proteines}
          <span className={styles.title}>Proteines</span>
        </span>
      </p>
      <p>
        <img src={carbsicon} alt="icon Glucides" />
        <span className={styles.nb}>
          {glucides}
          <span className={styles.title}>Glucides</span>
        </span>
      </p>
      <p>
        <img src={faticon} alt="icon Lipides" />
        <span className={styles.nb}>
          {lipides}
          <span className={styles.title}>Lipides</span>
        </span>
      </p>
    </section>
  )
}

KeyCards.propTypes = {
  keyData: PropTypes.object,
}

export default KeyCards
