import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {FiExternalLink} from 'react-icons/fi'

import {
  LoaderContainer,
  JobDetailsContainer,
  JobDetails,
  CompanyLogoContainer,
  CompanyLogo,
  TitleContainer,
  JobTitle,
  LocationContainer,
  LocationTypeContainer,
  TopParagraph,
  HorizontalLine,
  AnchorElement,
  SkillsContainer,
  SkillsCard,
  SkillImage,
  LifeImage,
  LifeDescription,
  SimilarHeading,
  SimilarContainer,
} from './styledComponents'

import FailureView from '../FailureView/index'
import Navbar from '../Navbar/index'
import RelatedJobCard from '../RelatedJobCard/index'

const CardItemStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemDetails extends Component {
  state = {cardStatus: CardItemStatus.initial, relatedCard: []}

  componentDidMount() {
    this.getCardDetails()
  }

  getCardDetails = async () => {
    this.setState({cardStatus: CardItemStatus.loading})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const cardUrlResponse = await fetch(apiUrl, options)
    if (cardUrlResponse.ok === true) {
      const jobData = await cardUrlResponse.json()
      const updateJobData = {
        jobDetails: {
          companyLogoUrl: jobData.job_details.company_logo_url,
          companyWebsiteUrl: jobData.job_details.company_website_url,
          employmentType: jobData.job_details.employment_type,
          id: jobData.job_details.id,
          jobDescription: jobData.job_details.job_description,
          lifeAtCompany: {
            description: jobData.job_details.life_at_company.description,
            imageUrl: jobData.job_details.life_at_company.image_url,
          },
          location: jobData.job_details.location,
          packagePerAnnum: jobData.job_details.package_per_annum,
          rating: jobData.job_details.rating,
          skills: jobData.job_details.skills.map(eachSkill => ({
            imageUrl: eachSkill.image_url,
            name: eachSkill.name,
          })),
          title: jobData.job_details.title,
        },
        similarJobs: jobData.similar_jobs.map(eachCard => ({
          companyLogoUrl: eachCard.company_logo_url,
          employmentType: eachCard.employment_type,
          id: eachCard.id,
          jobDescription: eachCard.job_description,
          location: eachCard.location,
          rating: eachCard.rating,
          title: eachCard.title,
        })),
      }
      this.setState({
        relatedCard: updateJobData,
        cardStatus: CardItemStatus.success,
      })
    } else {
      this.setState({cardStatus: CardItemStatus.failure})
    }
  }

  refreshFunction = () => {
    this.getCardDetails()
  }

  renderSuccess = () => {
    const {relatedCard} = this.state
    const {jobDetails, similarJobs} = relatedCard
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      skills,
      title,
    } = jobDetails

    return (
      <JobDetailsContainer>
        <JobDetails>
          <CompanyLogoContainer>
            <CompanyLogo src={companyLogoUrl} alt={title} />
            <TitleContainer>
              <JobTitle>{title}</JobTitle>
              <JobTitle>
                <BsFillStarFill color="#fbbf24" /> {rating}
              </JobTitle>
            </TitleContainer>
          </CompanyLogoContainer>
          <LocationContainer>
            <LocationTypeContainer>
              <TopParagraph>
                <MdLocationOn color="#ffffff" /> {location}
              </TopParagraph>
              <TopParagraph>
                <BsBriefcaseFill color="#ffffff" /> {employmentType}
              </TopParagraph>
            </LocationTypeContainer>
            <TopParagraph>{packagePerAnnum}</TopParagraph>
          </LocationContainer>
          <HorizontalLine />
          <LocationContainer>
            <JobTitle>Description</JobTitle>
            <AnchorElement href={companyWebsiteUrl}>
              Visit <FiExternalLink />
            </AnchorElement>
          </LocationContainer>
          <TopParagraph>{jobDescription}</TopParagraph>
          <JobTitle>Skills</JobTitle>
          <SkillsContainer>
            {skills.map(eachSkills => (
              <SkillsCard>
                <SkillImage src={eachSkills.imageUrl} alt={eachSkills.name} />
                <TopParagraph>{eachSkills.name}</TopParagraph>
              </SkillsCard>
            ))}
          </SkillsContainer>
          <JobTitle>Life at Company</JobTitle>
          <LocationContainer>
            <LifeDescription>{lifeAtCompany.description}</LifeDescription>
            <LifeImage src={lifeAtCompany.imageUrl} />
          </LocationContainer>
        </JobDetails>
        <SimilarHeading>Similar Jobs</SimilarHeading>
        <SimilarContainer>
          {similarJobs.map(eachJob => (
            <RelatedJobCard jobCardDetails={eachJob} key={eachJob.id} />
          ))}
        </SimilarContainer>
      </JobDetailsContainer>
    )
  }

  renderItemLoading = () => (
    <LoaderContainer testid="loader">
      <Loader type="MutatingDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  getRenderView = () => {
    const {cardStatus} = this.state

    switch (cardStatus) {
      case CardItemStatus.loading:
        return this.renderItemLoading()
      case CardItemStatus.success:
        return this.renderSuccess()
      case CardItemStatus.failure:
        return <FailureView retryFunction={this.refreshFunction} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar />
        {this.getRenderView()}
      </>
    )
  }
}

export default JobItemDetails
