import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import PropTypes from 'prop-types'
import styles from '../../styles/profil/averageSessions.module.css'

/**
 * Component - LineChart Graph of session Longer
 * @param {number} props.userSessionAverage.day // Day
 * @param {number} props.userSessionAverage.sessionLength // Session Longer
 * @returns {JSX}
 */
function AverageSessions(props) {
  const userSessionAverage = props.userSessionAverage

  // REPLACE NUMBER DAY BY GOOD LABEL
  const numberOfDay = ['L ', 'M ', 'M ', 'J ', 'V ', 'S ', 'D ']
  for (let i = 0; i < userSessionAverage.length; i++) {
    userSessionAverage[i].day = numberOfDay[i]
  }

  // const xasisDay = (value) => {
  //   return <span className={styles.xasisDay}>te{value} </span>
  // }

  // console.log(userSessionAverage)

  // function xasisDay(tickItem) {
  //   // If using moment.js
  //   return <span className={styles.xasisDay}>te{tickItem} </span>
  // }

  // const xasisDay = (tickItem) => {
  //   console.log(typeof tickItem)
  //   //return tickItem
  //   return '   L M M J V S D    '
  //   //return <span className={styles.xasisDay}>{tickItem.toString()} </span>
  // }

  return (
    <article className={styles.averagesession}>
      <h2>Durée moyenne des sessions</h2>
      <figure>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={userSessionAverage}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <Line type="monotone" dataKey="sessionLength" stroke="white" dot={false} strokeWidth={2} unit=" min" />
            <CartesianGrid stroke="transparent" />
            <XAxis
              // dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={40}
              tick={{
                fill: 'transparent',
                opacity: 0.5,
                AlignValue: 'right',
                fontSize: 12,
              }}
              padding={{ left: 0, right: 0 }}
              //tickFormatter={xasisDay}
              //textAnchor="end"
              //interval={0}
              //dy={0}
              //dx={10}
              hide={false}
            />
            <text x="50%" y="95%" textAnchor="middle" fontSize="12" fontWeight="500" fill="white" opacity="0.5">
              {/* <span className={styles.xasisDay}>{numberOfDay}</span> */}
              {numberOfDay}
            </text>
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

AverageSessions.propTypes = {
  userSessionAverage: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
}

export default AverageSessions
