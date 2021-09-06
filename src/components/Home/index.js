import {Link} from 'react-router-dom'

import Navbar from '../Navbar/index'

import {
  HomeContainer,
  TextContainer,
  HomeHeading,
  JobsButton,
  HomeDescription,
} from './styledComponents'

const Home = () => (
  <>
    <Navbar />
    <HomeContainer>
      <TextContainer>
        <HomeHeading>Find The Job That Fits Your Life</HomeHeading>
        <HomeDescription>
          Millions of people searching for jobs,salary information,company
          reviews. Find the job that fits your abilities and potential.
        </HomeDescription>
        <Link to="/jobs">
          <JobsButton type="button">Find Jobs</JobsButton>
        </Link>
      </TextContainer>
    </HomeContainer>
  </>
)

export default Home
