import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { USER_AVERAGE_SESSIONS } from '../../datas/dataMock'
import styles from '../../styles/averageSessions.module.css'

function AverageSessions(props) {
  const user = props.user
  const dataSession = USER_AVERAGE_SESSIONS[user].sessions

  return (
    <article className={styles.averagesession}>
      <h2>Durée moyenne des sessions</h2>
      <figure>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={dataSession}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              dot={false}
              strokeWidth={2}
              unit=" min"
            />
            <CartesianGrid stroke="transparent" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'white', opacity: 0.8, AlignValue: 'right' }}
              padding={{ left: 9, right: 10 }}
              textAnchor="right"
            />

            <YAxis hide={true} domain={['dataMin-10', 'dataMax+50']} />
            <Tooltip
              itemStyle={{
                color: 'black',
                fontSize: 8,
                fontWeight: 500,
              }}
              formatter={(value, name, unit) => [value, unit]}
              labelStyle={{ display: 'none' }}
              cursor={{
                stroke: 'black',
                strokeOpacity: 0.1,
                strokeWidth: 40,
                height: 263,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </figure>
    </article>
  )
}

export default AverageSessions