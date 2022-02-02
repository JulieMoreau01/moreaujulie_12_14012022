import React, { Component } from 'react'
import Title from '../components/Title'
import styles from '../styles/profil/profil.module.css'
import { useParams } from 'react-router-dom'
import AverageSessions from '../components/charts/AverageSessions'
import Activity from '../components/charts/Activity'
import Performance from '../components/charts/Performance'
import Score from '../components/charts/score'
import KeyCards from '../components/KeyCards'
import Error from '../pages/Error'
import { getUser, getActivity, getAverageSessions, getPerformance } from '../services/service'
/**
 * PROFIL PAGE API
 * @returns {JSX}
 */

// LOADING ANIMATION
const Loading = () => (
  <div className={styles.loading}>
    <div></div>
    <div></div>
  </div>
)

class Profil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      user: {
        userInfos: { firstName: null },
        keyData: {
          calorieCount: null,
          proteinCount: null,
          carbohydrateCount: null,
          lipidCount: null,
        },
        todayScore: null,
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
    }
  }

  componentDidMount() {
    const { id } = this.props.params
    this.isLoading = setTimeout(() => {
      this.setState({ loading: false })
    }, 2300)
    getUser(id)
      .then((data) => {
        this.setState({
          user: {
            userInfos: data.userInfos,
            keyData: data.keyData,
            todayScore: data.todayScore,
            score: data.score,
          },
        })
      })
      .catch(() => {
        this.setState({
          error: true,
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
    getPerformance(id).then((data) => {
      this.setState({
        userPerformance: {
          data: data.data,
        },
      })
    })
  }
  componentWillUnmount() {
    clearTimeout(this.isLoading)
  }

  timer = () =>
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2300)

  render() {
    const { loading } = this.state
    const { error } = this.state
    return (
      <React.Fragment>
        {(() => {
          if (error) {
            return <Error />
          } else if (loading) {
            return <Loading />
          } else {
            return (
              <section className={styles.profil}>
                <Title userFirstName={this.state.user.userInfos.firstName} />
                <Activity userActivity={this.state.userActivity.sessions} />
                <AverageSessions userSessionAverage={this.state.userAverageSessions.sessions} />
                <Performance userPerformance={this.state.userPerformance.data} />
                <Score userScore={this.state.user.todayScore || this.state.user.score} />
                <KeyCards userKeyData={this.state.user.keyData} />
              </section>
            )
          }
        })()}
      </React.Fragment>
    )
  }
}

export default (props) => <Profil {...props} params={useParams()} />
