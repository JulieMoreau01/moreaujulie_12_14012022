import React from 'react'
/**
 * DIsplay Welcome Title in Profil Page
 * @component
 * @param {string} props Name's user
 * @returns <h1> and <p>
 */
function Title(props) {
  const name = props.name
  return (
    <React.Fragment>
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </React.Fragment>
  )
}

export default Title
