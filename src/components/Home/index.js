import {Link} from 'react-router-dom'

import Navbar from '../Navbar/index'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <div className="home-container">
      <div className="text-container">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-description">
          Millions of people searching for jobs,salary information,company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="jobs-button" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
