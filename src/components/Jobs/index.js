import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar/index'
import Filter from '../Filter/index'
import FailureView from '../FailureView/index'
import JobCard from '../JobCard/index'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const status = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    activeType: [employmentTypesList[0].employmentTypeId],
    activeSalary: salaryRangesList[0].salaryRangeId,
    enterSearchInput: '',
    apiSearch: '',
    jobDetails: [],
    apiStatus: status.initial,
  }

  componentDidMount() {
    this.getJobsList()
  }

  getJobsList = async () => {
    this.setState({apiStatus: status.loading})
    const {activeType, activeSalary, apiSearch} = this.state
    const token = Cookies.get('jwt_token')

    const employeeTypes = activeType.join()
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employeeTypes}&minimum_package=${activeSalary}&search=${apiSearch}`
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const fetchResponse = await fetch(apiUrl, options)
    if (fetchResponse.ok === true) {
      const data = await fetchResponse.json()
      const updatedResultData = data.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      this.setState({jobDetails: updatedResultData, apiStatus: status.success})
    } else {
      this.setState({apiStatus: status.failure})
    }
  }

  onchangeType = employeeType => {
    const {activeType} = this.state
    const isPresent = activeType.includes(employeeType)
    if (isPresent === true) {
      const updateList = activeType.filter(
        eachCard => eachCard !== employeeType,
      )
      this.setState({activeType: updateList})
    } else {
      this.setState(prevState => ({
        activeType: [...prevState.activeType, employeeType],
      }))
    }
    this.getJobsList()
  }

  onchangeSalary = salary => {
    this.setState({activeSalary: salary})
    this.getJobsList()
  }

  onclickSearch = () => {
    const {enterSearchInput} = this.state
    this.setState({apiSearch: enterSearchInput})
    this.getJobsList()
  }

  retryFunction = () => {
    this.getJobsList()
  }

  changeSearch = event => {
    this.setState({enterSearchInput: event.target.value})
  }

  jobsSuccess = () => {
    const {jobDetails} = this.state
    const isJobsEmpty = jobDetails.length === 0

    return isJobsEmpty === true ? (
      <div className="job-route-no-jobs-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
          className="job-route-no-job-image"
        />
        <h1 className="job-route-job-heading">No Jobs Found</h1>
        <p className="job-route-paragraph-text">
          We could not find any jobs.Try other filters.
        </p>
      </div>
    ) : (
      <div className="job-route-success-container">
        {jobDetails.map(eachJob => (
          <JobCard detailsCard={eachJob} key={eachJob.id} />
        ))}
      </div>
    )
  }

  jobsLoading = () => (
    <div className="job-route-jobs-container-loader" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  getRenderJobs = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case status.loading:
        return this.jobsLoading()
      case status.success:
        return this.jobsSuccess()
      case status.failure:
        return <FailureView retryFunction={this.retryFunction} />
      default:
        return null
    }
  }

  render() {
    const {activeType, activeSalary} = this.state

    return (
      <>
        <Navbar />
        <div className="job-route-jobs-container">
          <div className="job-route-jobs-search-container-sm">
            <input
              type="text"
              onChange={this.changeSearch}
              placeholder="Search"
              className="job-route-search-input"
            />
            <button
              type="button"
              onClick={this.onclickSearch}
              testid="searchButton"
              className="job-route-search-icon"
            >
              <BsSearch color="#f1f5f9" />
            </button>
          </div>
          <div className="job-route-job-bottom-container">
            <Filter
              employmentType={employmentTypesList}
              salaryRange={salaryRangesList}
              changeType={this.onchangeType}
              changeSalary={this.onchangeSalary}
              activeEmployee={activeType}
              activeSalary={activeSalary}
            />
            <div className="job-route-success-container">
              <div className="job-route-jobs-search-container-lg">
                <input
                  type="text"
                  onChange={this.changeSearch}
                  placeholder="Search"
                  className="job-route-search-input"
                />
                <button
                  onClick={this.onclickSearch}
                  type="button"
                  testid="searchButton"
                  className="job-route-search-icon"
                >
                  <BsSearch color="#f1f5f9" />
                </button>
              </div>
              {this.getRenderJobs()}
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
