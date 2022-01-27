import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import styles from '../styles/profil/profil.module.css'
import { useParams } from 'react-router-dom'
import AverageSessions from '../components/charts/AverageSessions'
import Activity from '../components/charts/Activity'
import Performance from '../components/charts/Performance'
import Score from '../components/charts/score'
import KeyCards from '../components/KeyCards'
import {
  getUser,
  getActivity,
  getAverageSessions,
  getPerformance,
} from '../utils/service'
/**
 * PROFIL PAGE
 * @returns {JSX}
 */

class Profil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        userInfos: { firstName: null },
        keyData: {
          calorieCount: null,
          proteinCount: null,
          carbohydrateCount: null,
          lipidCount: null,
        },
      },
      userActivity: {
        sessions: { day: null, kilogram: null, calories: null },
      },
      userAverageSessions: {
        sessions: { day: null, sessionLength: null },
      },
      userPerformance: {
        data: { value: null, kind: null },
      },
      error: null,
    }
  }

  componentDidMount() {
    const { id } = this.props.params
    getUser(id).then((data) => {
      this.setState({
        user: {
          userInfos: data.userInfos,
          keyData: data.keyData,
          score: data.score,
        },
      })
    })
    getActivity(id).then((data) => {
      this.setState({
        userActivity: {
          sessions: data.sessions,
        },
      })
    })
    getAverageSessions(id).then((data) => {
      this.setState({
        userAverageSessions: {
          sessions: data.sessions,
        },
      })
    })
    getPerformance(id)
      .then((data) => {
        this.setState({
          userPerformance: {
            data: data.data,
          },
        })
      })
      .catch((error) => {
        this.setState({ error: error })
      })
  }

  render() {
    return (
      <section className={styles.profil}>
        <Title dataName={this.state.user.userInfos.firstName} />
        <Activity sessions={this.state.userActivity.sessions} />
        <AverageSessions sessions={this.state.userAverageSessions.sessions} />
        <Performance data={this.state.userPerformance.data} />
        <Score score={this.state.user.score} />
        <KeyCards keyData={this.state.user.keyData} />
      </section>
    )
  }
}

export default (props) => <Profil {...props} params={useParams()} />
