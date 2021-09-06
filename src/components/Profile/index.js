import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {
  ProfileAvatar,
  ProfileName,
  ProfileDescription,
  LoaderContainer,
  RefreshButton,
  ProfileContainer,
} from './styledComponents'

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
    <LoaderContainer>
      <Loader type="Circles" color={50} />
    </LoaderContainer>
  )

  renderProfileSuccess = () => {
    const {profileDetails} = this.state
    return (
      <ProfileContainer>
        <ProfileAvatar src={profileDetails.profileImageUrl} />
        <ProfileName>{profileDetails.name}</ProfileName>
        <ProfileDescription>{profileDetails.shortBio}</ProfileDescription>
      </ProfileContainer>
    )
  }

  renderProfileFailure = () => (
    <LoaderContainer>
      <RefreshButton type="button" onClick={this.onclickRefresh}>
        Retry
      </RefreshButton>
    </LoaderContainer>
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
