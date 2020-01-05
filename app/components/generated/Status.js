import React, { Component } from 'react'
import axios from 'axios'

export default class Status extends Component {
  constructor(props) {
    super(props)
    this.state = { status: 'checking', loading: true }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidMount() {
    this.checkHealth()
    this.timer = setInterval(() => this.checkHealth(), 2000)
  }

  checkHealth() {
    this.setState({ loading: true })
    axios
      .get(this.props.url)
      .then(({ data }) => {
        this.setState({ status: 'up' })
      })
      .catch(error => {
        console.log(error)
        this.setState({ status: 'down' })
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  render() {
    const { status, loading } = this.state
    return (
      <div className={`app ${status} ${loading ? 'loading' : ''}`}>
        {status}
      </div>
    )
  }
}
