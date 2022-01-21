import React from 'react'
import {
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'
import { USER_ACTIVITY } from '../../datas/dataMock'
import styles from '../../styles/activity.module.css'

function Activity(props) {
  const user = props.user
  const dataSession = USER_ACTIVITY[user].sessions

  const stylesLegend = { color: '#74798c', fontSize: '14px' }
  const legendValue = (value) => {
    return <span style={stylesLegend}>{value} </span>
  }

  return (
    <article className={styles.activity}>
      <h2>Activité quotidienne</h2>
      <figure>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dataSession}
            margin={{
              top: 35,
              right: 23,
              left: 23,
              bottom: 23,
            }}
          >
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#DEDEDE"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }}
              tickLine={false}
              tickSize={16}
              stroke="#DEDEDE"
            />
            <YAxis
              stroke="#9B9EAC"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }}
            />
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
            <Legend
              layout="horizontal"
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
              height={47}
              formatter={legendValue}
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[5, 5, 0, 0]}
              unit=" kg"
              name="Poids (kg)"
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[5, 5, 0, 0]}
              unit=" Kcal"
              name="Calories brûlées (kCal)"
            />
          </BarChart>
        </ResponsiveContainer>
      </figure>
    </article>
  )
}

export default Activity
