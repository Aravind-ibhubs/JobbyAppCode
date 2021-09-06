import styled from 'styled-components'

export const ProfileAvatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }
`

export const ProfileName = styled.h1`
  color: #6366f1;
  font-family: 'Roboto';
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const ProfileDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RefreshButton = styled.button`
  background-color: #4f46e5;
  color: #f8fafc;
  border-radius: 10px;
  padding: 10px;
`

export const ProfileContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  width: 80vw;
  margin-top: 20px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
