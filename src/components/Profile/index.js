import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import './index.css'

const profileStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Profile extends Component {
  state = {profileDetails: [], isProfileLoading: profileStatus.initial}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({isProfileLoading: profileStatus.inProgress})
    const profileUrl = 'https://apis.ccbp.in/profile'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const profileResponse = await fetch(profileUrl, options)
    if (profileResponse.ok === true) {
      const details = await profileResponse.json()
      const receivedDate = details.profile_details
      const updatedData = {
        name: receivedDate.name,
        profileImageUrl: receivedDate.profile_image_url,
        shortBio: receivedDate.short_bio,
      }
      this.setState({
        profileDetails: updatedData,
        isProfileLoading: profileStatus.success,
      })
    } else {
      this.setState({isProfileLoading: profileStatus.failure})
    }
  }

  onclickRefresh = () => {
    this.getProfileDetails()
  }

  renderProfileLoader = () => (
    <div className="profile-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfileSuccess = () => {
    const {profileDetails} = this.state
    return (
      <div className="profile-container">
        <img
          src={profileDetails.profileImageUrl}
          alt="profile avatar"
          className="profile-avatar"
        />
        <h1 className="profile-name">{profileDetails.name}</h1>
        <p className="profile-description">{profileDetails.shortBio}</p>
      </div>
    )
  }

  renderProfileFailure = () => (
    <div className="profile-loader-container">
      <button
        type="button"
        onClick={this.onclickRefresh}
        className="profile-refresh-button"
      >
        Retry
      </button>
    </div>
  )

  renderProfile = () => {
    const {isProfileLoading} = this.state

    switch (isProfileLoading) {
      case profileStatus.inProgress:
        return this.renderProfileLoader()
      case profileStatus.success:
        return this.renderProfileSuccess()
      case profileStatus.failure:
        return this.renderProfileFailure()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderProfile()}</>
  }
}

export default Profile
