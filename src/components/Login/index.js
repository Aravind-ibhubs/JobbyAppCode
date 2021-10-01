import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', isLoading: false, errMsg: ''}

  submitSuccess = loginToken => {
    const {history} = this.props
    Cookies.set('jwt_token', loginToken, {expires: 15, path: '/'})
    history.replace('/')
  }

  submitError = errorMsg => {
    this.setState({errMsg: errorMsg})
  }

  onClickSubmit = async event => {
    event.preventDefault()
    this.setState({isLoading: true})
    const {username, password} = this.state

    const userDetails = {username, password}
    const userLoginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const result = await fetch(userLoginUrl, options)
    const data = await result.json()
    if (result.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitError(data.error_msg)
    }
    this.setState({isLoading: false})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderLogin = () => {
    const {username, password, errMsg} = this.state

    return (
      <form onSubmit={this.onClickSubmit} className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="login-logo"
        />
        <div className="login-input-container">
          <label className="login-label-element" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={this.changeUsername}
            value={username}
            className="login-input-element"
          />
        </div>
        <div className="login-input-container">
          <label className="login-label-element" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.changePassword}
            value={password}
            className="login-input-element"
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <p className="login-error-message">{errMsg}</p>
      </form>
    )
  }

  renderLoader = () => (
    <div className="login-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-main-app">
        {isLoading ? this.renderLoader() : this.renderLogin()}
      </div>
    )
  }
}

export default Login
