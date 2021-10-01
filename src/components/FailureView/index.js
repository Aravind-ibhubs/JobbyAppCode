import './index.css'

const FailureView = props => {
  const {retryFunction} = props

  const onclickReset = () => {
    retryFunction()
  }

  return (
    <div className="failure-container">
      <div className="failure-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
          className="failure-image"
        />
        <h1 className="failure-heading">Oops! Something Went Wrong</h1>
        <p className="failure-paragraph">
          We cannot to find the page you are looking for
        </p>
        <button
          type="button"
          className="failure-retry-button"
          onClick={onclickReset}
        >
          Retry
        </button>
      </div>
    </div>
  )
}

export default FailureView
