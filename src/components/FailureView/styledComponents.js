import styled from 'styled-components'

export const FailureContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`

export const FailureTextContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const FailureImage = styled.img`
  height: 25vh;
  width: 25vw;
`

export const FailureHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`

export const FailureParagraph = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
`

export const FailureRetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border-radius: 15px;
  padding: 15px;
  font-family: 'Roboto';
`
