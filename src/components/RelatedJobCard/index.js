import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import {
  CardContainers,
  CardTopContainer,
  CardImage,
  TitleContainer,
  TopHeading,
  Description,
  BottomContainer,
} from './styledComponents'

const RelatedJobCard = props => {
  const {jobCardDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    rating,
    title,
  } = jobCardDetails

  return (
    <CardContainers>
      <CardTopContainer>
        <CardImage src={companyLogoUrl} alt={id} />
        <TitleContainer>
          <TopHeading>{title}</TopHeading>
          <TopHeading>
            <BsFillStarFill color="#fbbf24" /> {rating}
          </TopHeading>
        </TitleContainer>
      </CardTopContainer>
      <TopHeading>Description</TopHeading>
      <Description>{jobDescription}</Description>
      <BottomContainer>
        <Description>
          <MdLocationOn color="#ffffff" /> {location}
        </Description>
        <Description>
          <BsBriefcaseFill color="#ffffff" /> {employmentType}
        </Description>
      </BottomContainer>
    </CardContainers>
  )
}

export default RelatedJobCard
