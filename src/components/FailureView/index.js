import {
  FailureContainer,
  FailureTextContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  FailureRetryButton,
} from './styledComponents'

const FailureView = props => {
  const {retryFunction} = props

  const onclickReset = () => {
    retryFunction()
  }

  return (
    <FailureContainer>
      <FailureTextContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <FailureParagraph>
          We cannot to find the page you are looking for
        </FailureParagraph>
        <FailureRetryButton type="button" onClick={onclickReset}>
          Retry
        </FailureRetryButton>
      </FailureTextContainer>
    </FailureContainer>
  )
}

export default FailureView
