import Profile from '../Profile/index'

import './index.css'

const Filter = props => {
  const {
    employmentType,
    salaryRange,
    changeType,
    changeSalary,
    activeEmployee,
    activeSalary,
  } = props

  const getRadioElement = eachRadio => {
    const isOptionSelected = eachRadio.salaryRangeId === activeSalary && true
    const onchangeRadio = () => {
      changeSalary(eachRadio.salaryRangeId)
    }

    return (
      <div className="card-container" key={eachRadio.label}>
        <input
          type="radio"
          name="salary"
          id={`salary-${eachRadio.salaryRangeId}`}
          value={eachRadio.salaryRangeId}
          checked={isOptionSelected}
          onChange={onchangeRadio}
          className="checkbox"
        />
        <label
          className="label-element"
          htmlFor={`salary-${eachRadio.salaryRangeId}`}
        >
          {eachRadio.label}
        </label>
        <br />
      </div>
    )
  }

  const renderSalary = () => (
    <div className="checkbox-container">
      <h1 className="filter-heading">Salary Range</h1>
      {salaryRange.map(eachRadio => getRadioElement(eachRadio))}
    </div>
  )

  const getCheckbox = eachCheck => {
    const onchangeEmployee = () => {
      changeType(eachCheck.employmentTypeId)
    }
    const isChecked = activeEmployee.includes(eachCheck.employmentTypeId)
      ? true
      : null

    return (
      <div className="card-container" key={eachCheck.label}>
        <input
          type="checkbox"
          id={eachCheck.label}
          onChange={onchangeEmployee}
          checked={isChecked}
          className="checkbox"
        />
        <label className="label-element" htmlFor={eachCheck.label}>
          {eachCheck.label}
        </label>
        <br />
      </div>
    )
  }

  const renderEmployee = () => (
    <div className="checkbox-container">
      <h1 className="filter-heading">Type of Employment</h1>
      {employmentType.map(eachCheck => getCheckbox(eachCheck))}
    </div>
  )

  return (
    <div className="filter-container">
      <Profile />
      <hr className="line-element" />
      {renderEmployee()}
      <hr className="line-element" />
      {renderSalary()}
    </div>
  )
}

export default Filter
