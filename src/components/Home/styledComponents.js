import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 90vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (min-width: 768px) {
    align-items: center;
    background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
    background-size: cover;
  }
`

export const TextContainer = styled.div`
  height: 45vh;
  width: 80vw;
  margin-top: 25px;
  margin-left: 15px;
  @media (min-width: 768px) {
    margin-top: 20px;
    width: 50vw;
    margin-left: 40px;
  }
`

export const HomeHeading = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 75px;
  }
`

export const HomeDescription = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 17px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`

export const JobsButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  font-family: 'Roboto';
  border-radius: 10px;
  border-width: 0px;
  padding: 10px;
  height: 40px;
  width: 80px;
  @media (min-width: 768px) {
    height: 50px;
    width: 95px;
  }
`
