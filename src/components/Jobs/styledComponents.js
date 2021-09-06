import styled from 'styled-components'

export const JobsContainer = styled.div`
  min-height: 220vh;
  max-height: 700vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const JobBottomContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const JobsSearchContainerSm = styled.div`
  width: 80vw;
  border-radius: 10px;
  margin-top: 20px;
  background-color: transparent;
  border: 1px solid #64748b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`

export const JobsSearchContainerLg = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 25vw;
    height: 30px;
    background-color: transparent;
    border: 1px solid #64748b;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 25px;
    align-self: flex-start;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  color: #f1f5f9;
  border-width: 0px;
  padding: 10px;
  border-radius: 10px;
`

export const SearchIcon = styled.button`
  background-color: #272727;
  border-width: 0px;
  width: 50px;
`

export const JobHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`

export const JobsContainerLoader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SuccessContainer = styled.div`
  min-height: 50vh;
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const NoJobsContainer = styled.div`
  background-color: #000000;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const NoJobImage = styled.img`
  height: 25vh;
  width: 25vw;
`

export const ParagraphText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
`
