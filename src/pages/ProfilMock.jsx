import React, { useEffect } from 'react'
import Title from '../components/Title'
import styles from '../styles/profil/profil.module.css'
import { useParams } from 'react-router-dom'
import AverageSessions from '../components/charts/AverageSessions'
import Activity from '../components/charts/Activity'
import Performance from '../components/charts/Performance'
import Score from '../components/charts/score'
import KeyCards from '../components/KeyCards'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../datas/dataMock'
/**
 * PROFIL PAGE
 * @returns {JSX}
 */
function Profil() {
  const { id } = useParams()
  const idNum = parseInt(id, 10)

  const user = USER_MAIN_DATA.findIndex(function (item) {
    return idNum === item.id
  })

  const name = USER_MAIN_DATA[user].userInfos.firstName
  const dataSession = USER_ACTIVITY[user].sessions
  const dataSessionAverage = USER_AVERAGE_SESSIONS[user].sessions
  const performance = USER_PERFORMANCE[user].data
  const score = USER_MAIN_DATA[user].todayScore
  const keyData = USER_MAIN_DATA[user].keyData

  return (
    <React.Fragment>
      <section className={styles.profil}>
        <Title dataName={name} />
        <Activity sessions={dataSession} />
        <AverageSessions sessions={dataSessionAverage} />
        <Performance data={performance} />
        <Score score={score} />
        <KeyCards keyData={keyData} />
      </section>
    </React.Fragment>
  )
}

export default Profil
