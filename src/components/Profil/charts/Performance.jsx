import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import styles from '../../../styles/profil/performance.module.css'

/**
 * Component - RadarChart Graph of performance
 * @param {number} props.userPerformance.value // Performance
 * @param {number} props.userPerformance.kind // Label
 * @returns {JSX}
 */

function Performance(props) {
  const userPerformance = props.userPerformance

  // REPLACE NUMBER DATA BY GOOD LABEL
  const kindName = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
  for (let i = 0; i < 6; i++) {
    userPerformance[i].kind = kindName[i]
  }

  return (
    <article className={styles.performance}>
      <figure>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={userPerformance} cx="50%" cy="50%" outerRadius="65%">
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickSize={10}
              tick={{
                fill: 'white',
                fontSize: 10,
                fontWeight: 500,
                y: 200,
              }}
            />
            <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </figure>
    </article>
  )
}

Performance.propTypes = {
  userPerformance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
    })
  ).isRequired,
}

export default Performance
