import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../styles/profil/keyCards.module.css'
/**
 * Component for Keycards
 * @param {number} props.data
 * @param {string} props.name
 * @param {string} props.icon // url
 * @param {string} props.unit
 * @returns {JSX}
 */
function KeyCardsBlock(props) {
  const data = props.data
  const name = props.name
  const icon = props.icon
  const unit = props.unit
  return (
    <p>
      <img src={icon} alt="icon" />
      <span className={styles.nb}>
        {data} {unit}
        <span className={styles.title}>{name}</span>
      </span>
    </p>
  )
}

KeyCardsBlock.propTypes = {
  data: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
}

export default KeyCardsBlock
