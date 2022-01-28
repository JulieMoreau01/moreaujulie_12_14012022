import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'
import styles from '../../styles/profil/score.module.css'

/**
 * Component - RadialChart Graph of todayScrore
 * @param {number} props.user index of USER_MAIN_DATA= id
 * @returns {JSX}
 */
function Score(props) {
  const score = props.score

  console.log(score)

  const scoreValue = [{ value: score * 100 }]
  const newScore = score * 100

  console.log(newScore)

  return (
    <article className={styles.score}>
      <h2>Score</h2>
      <figure>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={scoreValue}
            innerRadius={80}
            barSize={10}
            startAngle={90}
            endAngle={450}
            fill={'#FF0000'}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={5} background />
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              fontSize="26"
              fontWeight="700"
              fill="black"
            >
              {newScore}%
            </text>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fontSize="16"
              fill="gray"
              fontWeight="500"
            >
              de votre objectif
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </figure>
    </article>
  )
}

Score.propTypes = {
  score: PropTypes.number,
}

export default Score
