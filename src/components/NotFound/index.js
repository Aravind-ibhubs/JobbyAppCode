import Navbar from '../Navbar/index'

import {
  MainContainer,
  TextContainer,
  NotFoundImage,
  NotHeading,
  NotParagraph,
} from './styledComponents'

const NotFound = () => (
  <>
    <Navbar />
    <MainContainer>
      <TextContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
        />
        <NotHeading>Page Not Found</NotHeading>
        <NotParagraph>
          we&#180;re sorry,the page you requested could not be found
        </NotParagraph>
      </TextContainer>
    </MainContainer>
  </>
)

export default NotFound
