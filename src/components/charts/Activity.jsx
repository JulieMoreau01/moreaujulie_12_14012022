import React from 'react'
import { Legend, CartesianGrid, XAxis, YAxis, Tooltip, Bar, BarChart, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import styles from '../../styles/profil/activity.module.css'

/**
 * Component - BarChart Graph of Daily activity
 * @param {array} props.userActivity
 * @param {string} props.userActivity.day // Day
 * @param {number} props.userActivity.kilogram // Height
 * @param {number} props.userActivity.calories // Calories
 * @returns {JSX}
 */
function Activity(props) {
  const userActivity = props.userActivity

  // REPLACE NUMBER DAY BY GOOD LABEL
  const numberOfDay = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  for (let i = 0; i < userActivity.length; i++) {
    userActivity[i].day = numberOfDay[i]
  }

  const legendValue = (value) => {
    return <span className={styles.legend}>{value} </span>
  }

  return (
    <article className={styles.activity}>
      <h2>Activité quotidienne</h2>
      <figure>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={userActivity} margin={{ top: 35, right: 23, left: 23, bottom: 23 }}>
            <CartesianGrid strokeDasharray="2 2" stroke="#DEDEDE" horizontal={true} vertical={false} />

            <XAxis dataKey="day" tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }} tickLine={false} tickSize={16} stroke="#DEDEDE" />

            <YAxis
              yAxisId={0}
              dataKey="kilogram"
              stroke="#9B9EAC"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }}
              domain={['dataMin - 1', 'dataMax + 2']}
            />
            <YAxis yAxisId={1} dataKey="calories" hide={true} domain={['dataMin - 100', 'dataMax + 100']} />

            <Tooltip
              itemStyle={{
                color: 'white',
                fontSize: 10,
                fontWeight: 500,
              }}
              formatter={(value, name, unit) => [value, unit]}
              labelStyle={{ display: 'none' }}
              contentStyle={{
                backgroundColor: '#E60000',
              }}
            />

            <Legend layout="horizontal" verticalAlign="top" align="right" iconType="circle" iconSize={8} height={47} formatter={legendValue} />

            <Bar yAxisId={0} dataKey="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} unit=" kg" name="Poids (kg)" />
            <Bar yAxisId={1} dataKey="calories" fill="#E60000" barSize={7} radius={[5, 5, 0, 0]} unit=" Kcal" name="Calories brûlées (kCal)" />
          </BarChart>
        </ResponsiveContainer>
      </figure>
    </article>
  )
}

Activity.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
}

export default Activity
