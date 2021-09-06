import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const TextContainer = styled.div`
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const NotFoundImage = styled.img`
  height: 45vh;
  width: 60vw;
  @media (min-width: 768px) {
    height: 40vh;
    width: 30vw;
  }
`

export const NotHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`

export const NotParagraph = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
`
