import React, { useEffect } from 'react'
import Title from '../components/Title'
import styles from '../styles/profil.module.css'
import { useParams } from 'react-router-dom'
import AverageSessions from '../components/charts/AverageSessions'
import Activity from '../components/charts/Activity'
import Performance from '../components/charts/Performance'
import Score from '../components/charts/score'
import KeyCards from '../components/KeyCards'
import { USER_MAIN_DATA } from '../datas/dataMock'
/**
 * PROFIL PAGE
 * @returns <section>
 */
function Profil() {
  const { id } = useParams()
  const idNum = parseInt(id, 10)

  const user = USER_MAIN_DATA.findIndex(function (item) {
    return idNum === item.id
  })

  const name = USER_MAIN_DATA[user].userInfos.firstName
  return (
    <React.Fragment>
      <section className={styles.profil}>
        <Title name={name} />
        <Activity user={user} />
        <AverageSessions user={user} />
        <Performance user={user} />
        <Score user={user} />
        <KeyCards user={user} />
      </section>
    </React.Fragment>
  )
}

export default Profil
