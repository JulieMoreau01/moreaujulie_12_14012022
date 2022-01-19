import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar,
} from 'recharts'
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from '../datas/dataMock'
import styles from '../styles/averageSessions.module.css'

function AverageSessions() {
  const dataSession = USER_AVERAGE_SESSIONS[1].sessions

  return (
    <article className={styles.averagesession}>
      <h2>Durée moyenne des sessions</h2>
      <figure>
        <LineChart width={258} height={263} data={dataSession}>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            dot={false}
            strokeWidth={2}
          />
          <CartesianGrid stroke="transparent" />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'white' }}
            padding={{ left: 0, right: 0 }}
          />

          <YAxis hide={true} domain={['dataMin-10', 'dataMax+50']} />
          <Tooltip
            itemStyle={{
              color: 'black',
              size: '12',
            }}
            labelStyle={{ display: 'none' }}
            cursor={{
              stroke: 'black',
              strokeOpacity: 0.1,
              strokeWidth: 70,
              height: 300,
            }}
          />
          {/* <Bar dataKey="sessionLength" fill="blue" barSize={30} /> */}
        </LineChart>
      </figure>
    </article>
  )
}

export default AverageSessions
