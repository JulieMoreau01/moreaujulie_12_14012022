import React, { useEffect } from 'react'
import Title from '../components/Title'
import styles from '../styles/profil.module.css'
import { useParams } from 'react-router-dom'
import AverageSessions from '../components/AverageSessions'
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '../datas/dataMock'

function Profil() {
  // const { id } = useParams()
  // console.log(id)
  const name = USER_MAIN_DATA[0].userInfos.firstName

  return (
    <section className={styles.profil}>
      <Title name={name} />
      <AverageSessions />
    </section>
  )
}

export default Profil
