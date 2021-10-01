import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

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
    <li className="related-card-containers">
      <div className="related-card-top-container">
        <img src={companyLogoUrl} alt={id} className="related-card-image" />
        <div className="related-title-container">
          <h1 className="related-top-heading">{title}</h1>
          <h1 className="related-top-heading">
            <BsFillStarFill color="#fbbf24" /> {rating}
          </h1>
        </div>
      </div>
      <h1 className="related-top-heading">Description</h1>
      <p className="related-description">{jobDescription}</p>
      <div className="related-bottom-container">
        <p className="related-description">
          <MdLocationOn color="#ffffff" /> {location}
        </p>
        <p className="related-description">
          <BsBriefcaseFill color="#ffffff" /> {employmentType}
        </p>
      </div>
    </li>
  )
}

export default RelatedJobCard
