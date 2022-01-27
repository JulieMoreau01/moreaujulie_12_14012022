import React from 'react'
import PropTypes from 'prop-types'
/**
 * Component Welcome Title in Profil Page
 * @param {string} props Name's user
 * @returns {JSX}
 */
function Title(props) {
  return (
    <React.Fragment>
      <h1>
        Bonjour <span>{props.dataName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </React.Fragment>
  )
}

Title.propTypes = {
  dataName: PropTypes.string,
}

export default Title
