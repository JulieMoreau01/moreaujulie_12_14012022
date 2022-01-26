import React from 'react'
/**
 * Component Welcome Title in Profil Page
 * @param {string} props Name's user
 * @returns <h1> <p>
 */
function Title(props) {
  const dataName = props.dataName
  return (
    <React.Fragment>
      <h1>
        Bonjour <span>{dataName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </React.Fragment>
  )
}

export default Title
