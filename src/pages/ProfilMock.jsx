import React from 'react'
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
 * PROFIL PAGE MOCK
 * @returns {JSX}
 */
function Profil() {
  const { id } = useParams()
  const idNum = parseInt(id, 10)

  const user = USER_MAIN_DATA.findIndex(function (item) {
    return idNum === item.id
  })

  const userFirstName = USER_MAIN_DATA[user].userInfos.firstName
  const userActivity = USER_ACTIVITY[user].sessions
  const userSessionAverage = USER_AVERAGE_SESSIONS[user].sessions
  const userPerformance = USER_PERFORMANCE[user].data
  const userScore = USER_MAIN_DATA[user].todayScore
  const userKeyData = USER_MAIN_DATA[user].keyData

  return (
    <React.Fragment>
      <section className={styles.profil}>
        <Title userFirstName={userFirstName} />
        <Activity userActivity={userActivity} />
        <AverageSessions userSessionAverage={userSessionAverage} />
        <Performance userPerformance={userPerformance} />
        <Score userScore={userScore} />
        <KeyCards userKeyData={userKeyData} />
      </section>
    </React.Fragment>
  )
}

export default Profil
