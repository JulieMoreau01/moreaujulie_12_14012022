import React from 'react'
import Title from '../components/Profil/Title'
import styles from '../styles/profil/profil.module.css'
import { useParams } from 'react-router-dom'
import AverageSessions from '../components/Profil/charts/AverageSessions'
import Activity from '../components/Profil/charts/Activity'
import Performance from '../components/Profil/charts/Performance'
import Score from '../components/Profil/charts/score'
import KeyCards from '../components/Profil/KeyCards/KeyCards'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../datas/dataMock'
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
