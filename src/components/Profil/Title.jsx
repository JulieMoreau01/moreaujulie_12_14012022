import React from 'react'
import PropTypes from 'prop-types'
/**
 * Component Welcome Title in Profil Page
 * @param {string} props.userFirstName // Name's user
 * @returns {JSX}
 */
function Title(props) {
  return (
    <React.Fragment>
      <h1>
        Bonjour <span>{props.userFirstName}</span>
      </h1>
      <p>
        Félicitation ! Vous avez explosé vos objectifs hier
        <span role="img" aria-label="icon">
          👏
        </span>
      </p>
    </React.Fragment>
  )
}

Title.propTypes = {
  userFirstName: PropTypes.string.isRequired,
}

export default Title
