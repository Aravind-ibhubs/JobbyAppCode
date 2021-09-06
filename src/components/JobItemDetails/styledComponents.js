import styled from 'styled-components'

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const JobDetailsContainer = styled.div`
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
`

export const JobDetails = styled.div`
  background-color: #272727;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  border-radius: 20px;
  padding: 25px;
  margin-top: 35px;
`

export const CompanyLogoContainer = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const CompanyLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  @media (min-width: 768px) {
    height: 65px;
    width: 65px;
  }
`

export const TitleContainer = styled.div`
  height: 40px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 768px) {
    height: 60px;
    margin-left: 15px;
  }
`

export const JobTitle = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LocationTypeContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const TopParagraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const HorizontalLine = styled.hr`
  width: 78vw;
  border: 1px solid #f1f5f9;
`

export const AnchorElement = styled.a`
  font-family: 'Roboto';
  color: #6366f1;
  font-weight: bold;
  text-align: center;
`

export const SkillsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  width: 60vw;
`

export const SkillsCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const SkillImage = styled.img`
  height: 25px;
  width: 25px;
`

export const LifeImage = styled.img`
  height: 45vh;
  width: 25vw;
`

export const LifeDescription = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  width: 30vw;
  font-size: 25px;
  align-self: flex-start;
`

export const SimilarHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 40px;
  align-self: flex-start;
  margin-left: 10vw;
`

export const SimilarContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
