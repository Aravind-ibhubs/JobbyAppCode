import Profile from '../Profile/index'

import {
  FilterContainer,
  LineElement,
  CheckboxContainer,
  Checkbox,
  LabelElement,
  CardContainer,
  FilterHeading,
} from './styledComponents'

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
      <CardContainer key={eachRadio.label}>
        <Checkbox
          type="radio"
          name="salary"
          id={`salary-${eachRadio.salaryRangeId}`}
          value={eachRadio.salaryRangeId}
          checked={isOptionSelected}
          onChange={onchangeRadio}
        />
        <LabelElement htmlFor={`salary-${eachRadio.salaryRangeId}`}>
          {eachRadio.label}
        </LabelElement>
        <br />
      </CardContainer>
    )
  }

  const renderSalary = () => (
    <CheckboxContainer>
      <FilterHeading>Salary Range</FilterHeading>
      {salaryRange.map(eachRadio => getRadioElement(eachRadio))}
    </CheckboxContainer>
  )

  const getCheckbox = eachCheck => {
    const onchangeEmployee = () => {
      changeType(eachCheck.employmentTypeId)
    }
    const isChecked = activeEmployee.includes(eachCheck.employmentTypeId)
      ? true
      : null

    return (
      <CardContainer key={eachCheck.label}>
        <Checkbox
          type="checkbox"
          id={eachCheck.label}
          onChange={onchangeEmployee}
          checked={isChecked}
        />
        <LabelElement htmlFor={eachCheck.label}>{eachCheck.label}</LabelElement>
        <br />
      </CardContainer>
    )
  }

  const renderEmployee = () => (
    <CheckboxContainer>
      <FilterHeading>Type of Employment</FilterHeading>
      {employmentType.map(eachCheck => getCheckbox(eachCheck))}
    </CheckboxContainer>
  )

  return (
    <FilterContainer>
      <Profile />
      <LineElement />
      {renderEmployee()}
      <LineElement />
      {renderSalary()}
    </FilterContainer>
  )
}

export default Filter
