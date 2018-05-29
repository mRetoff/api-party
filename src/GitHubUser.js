import React, { Component } from 'react'
import './GitHubUser.css'

class GithubUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  fetchUserData = () => {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state
    return (
      <div className="GithubUser">
        <img src={user.avatar.url} alt="" />
        <h2>{user.login}</h2>
      </div>
    )
  }
}

export default GithubUser