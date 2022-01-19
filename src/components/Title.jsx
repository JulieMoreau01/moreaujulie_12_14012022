import React from 'react'

function Title(props) {
  const name = props.name
  return (
    <React.Fragment>
      <h1>Bonjour {name}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </React.Fragment>
  )
}

export default Title
