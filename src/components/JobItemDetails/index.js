import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {FiExternalLink} from 'react-icons/fi'

import './index.css'

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
      <div className="job-item-job-details-container">
        <div className="job-item-job-details">
          <div className="job-item-company-logo-container">
            <img
              src={companyLogoUrl}
              alt={title}
              className="job-item-company-logo"
            />
            <div className="job-item-title-container">
              <h1 className="job-item-job-title">{title}</h1>
              <h1 className="job-item-job-title">
                <BsFillStarFill color="#fbbf24" /> {rating}
              </h1>
            </div>
          </div>
          <div className="job-item-location-container">
            <div className="job-item-location-type-container">
              <p className="job-item-top-paragraph">
                <MdLocationOn color="#ffffff" /> {location}
              </p>
              <p className="job-item-top-paragraph">
                <BsBriefcaseFill color="#ffffff" /> {employmentType}
              </p>
            </div>
            <p className="job-item-top-paragraph">{packagePerAnnum}</p>
          </div>
          <hr className="job-item-horizontal-line" />
          <div className="job-item-location-container">
            <h1 className="job-item-job-title">Description</h1>
            <a className="job-item-anchor-element" href={companyWebsiteUrl}>
              Visit <FiExternalLink />
            </a>
          </div>
          <p className="job-item-top-paragraph">{jobDescription}</p>
          <h1 className="job-item-job-title">Skills</h1>
          <ul className="job-item-skills-container">
            {skills.map(eachSkills => (
              <li className="job-item-skills-card">
                <img
                  src={eachSkills.imageUrl}
                  alt={eachSkills.name}
                  className="job-item-skill-image"
                />
                <p className="job-item-top-paragraph">{eachSkills.name}</p>
              </li>
            ))}
          </ul>
          <h1 className="job-item-job-title">Life at Company</h1>
          <div className="job-item-location-container">
            <p className="job-item-life-description">
              {lifeAtCompany.description}
            </p>
            <img
              src={lifeAtCompany.imageUrl}
              alt="life at company"
              className="job-item-life-image"
            />
          </div>
        </div>
        <h1 className="job-item-similar-heading">Similar Jobs</h1>
        <ul className="job-item-similar-container">
          {similarJobs.map(eachJob => (
            <RelatedJobCard jobCardDetails={eachJob} key={eachJob.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderItemLoading = () => (
    <div className="job-item-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
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
