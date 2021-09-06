import {Link} from 'react-router-dom'
import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import {
  JobCardContainer,
  CompanyLogoTitleCard,
  CompanyLogo,
  TitleContainer,
  JobTitle,
  LocationSalaryContainer,
  LocationContainer,
  JobParagraph,
  HorizontalLine,
  DescriptionContainer,
} from './styledComponents'

const JobCard = props => {
  const {detailsCard} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = detailsCard

  return (
    <Link to={`/jobs/${id}`}>
      <JobCardContainer>
        <CompanyLogoTitleCard>
          <CompanyLogo src={companyLogoUrl} alt={title} />
          <TitleContainer>
            <JobTitle>{title}</JobTitle>
            <JobTitle>
              <BsFillStarFill color="#fbbf24" /> {rating}
            </JobTitle>
          </TitleContainer>
        </CompanyLogoTitleCard>
        <LocationSalaryContainer>
          <LocationContainer>
            <JobParagraph>
              <MdLocationOn color="#ffffff" /> {location}
            </JobParagraph>
            <JobParagraph>
              <BsBriefcaseFill color="#ffffff" /> {employmentType}
            </JobParagraph>
          </LocationContainer>
          <JobTitle>{packagePerAnnum}</JobTitle>
        </LocationSalaryContainer>
        <HorizontalLine />
        <DescriptionContainer>
          <JobTitle>Description</JobTitle>
          <JobParagraph>{jobDescription}</JobParagraph>
        </DescriptionContainer>
      </JobCardContainer>
    </Link>
  )
}

export default JobCard
