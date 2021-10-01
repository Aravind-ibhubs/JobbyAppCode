import {Link} from 'react-router-dom'
import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

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
      <div className="job-card-container">
        <div className="company-logo-title-card">
          <img src={companyLogoUrl} alt={title} className="company-logo" />
          <div className="title-container">
            <h1 className="job-title">{title}</h1>
            <h1 className="job-title">
              <BsFillStarFill color="#fbbf24" /> {rating}
            </h1>
          </div>
        </div>
        <div className="location-salary-container">
          <div className="location-container">
            <p className="job-paragraph">
              <MdLocationOn color="#ffffff" /> {location}
            </p>
            <p className="job-paragraph">
              <BsBriefcaseFill color="#ffffff" /> {employmentType}
            </p>
          </div>
          <h1 className="job-title">{packagePerAnnum}</h1>
        </div>
        <hr className="horizontal-line" />
        <div className="description-container">
          <h1 className="job-title">Description</h1>
          <p className="job-paragraph">{jobDescription}</p>
        </div>
      </div>
    </Link>
  )
}

export default JobCard
