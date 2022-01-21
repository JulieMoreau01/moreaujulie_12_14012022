import React from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { USER_PERFORMANCE } from '../../datas/dataMock'
import styles from '../../styles/performance.module.css'

/**
 * Component - RadarChart Graph of performance
 * @param {number} props.user index of USER_PERFORMANCE= id
 * @returns <article> with RadarChart Graph
 */
function Performance(props) {
  const user = props.user
  const data = USER_PERFORMANCE[user].data
  const dataKind = USER_PERFORMANCE[user].kind

  console.log(data)
  console.log(dataKind)

  return (
    <article className={styles.performance}>
      <figure>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            width={258}
            height={263}
            data={data}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickSize={5}
              tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
            />
            <Radar
              name="Mike"
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </figure>
    </article>
  )
}

export default Performance
