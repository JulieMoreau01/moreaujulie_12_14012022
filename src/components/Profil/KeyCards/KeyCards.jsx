import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../styles/profil/keyCards.module.css'
import caloriesicon from '../../../assets/calories-icon.svg'
import carbsicon from '../../../assets/carbs-icon.svg'
import faticon from '../../../assets/fat-icon.svg'
import proteinicon from '../../../assets/protein-icon.svg'
import KeyCardsBlock from '../KeyCards/KeycardsBlock'

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
      <KeyCardsBlock data={calories} name="Calories" icon={caloriesicon} unit="kCal" />
      <KeyCardsBlock data={proteines} name="Proteines" icon={proteinicon} unit="g" />
      <KeyCardsBlock data={glucides} name="Glucides" icon={carbsicon} unit="g" />
      <KeyCardsBlock data={lipides} name="Lipides" icon={faticon} unit="g" />
    </section>
  )
}

KeyCards.propTypes = {
  userKeyData: PropTypes.object.isRequired,
}

export default KeyCards
