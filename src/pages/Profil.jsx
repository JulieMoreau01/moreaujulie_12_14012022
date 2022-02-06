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
          userInfos: data.userInfos,
          keyData: data.keyData,
          todayScore: data.todayScore,
          score: data.score,
        })
      })
      .catch(() => {
        this.setState({ error: true })
      })
    getActivity(id)
      .then((data) => {
        this.setState({ userActivity: data.sessions })
      })
      .catch(() => {
        this.setState({ error: true })
      })
    getAverageSessions(id)
      .then((data) => {
        this.setState({ userAverageSessions: data.sessions })
      })
      .catch(() => {
        this.setState({ error: true })
      })
    getPerformance(id)
      .then((data) => {
        this.setState({ userPerformance: data.data })
      })
      .catch(() => {
        this.setState({ error: true })
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
                <Title userFirstName={this.state.userInfos.firstName} />
                <Activity userActivity={this.state.userActivity} />
                <AverageSessions userSessionAverage={this.state.userAverageSessions} />
                <Performance userPerformance={this.state.userPerformance} />
                <Score userScore={this.state.todayScore || this.state.score} />
                <KeyCards userKeyData={this.state.keyData} />
              </section>
            )
          }
        })()}
      </React.Fragment>
    )
  }
}

export default (props) => <Profil {...props} params={useParams()} />
