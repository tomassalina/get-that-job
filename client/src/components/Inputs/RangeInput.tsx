import { RangeInputProps } from './type'
import SalaryIcon from '../../assets/icons/salary.svg'

export const RangeInput = (props: RangeInputProps) => {
  const { values, label, handleChangeMin, handleChangeMax } = props

  return (
    <label htmlFor="range-min" className="range">
      <span className="input__label">{label}</span>
      <div className="range-container">
        <input
          type="number"
          name="salaryRangeMin"
          id="range-min"
          placeholder="min"
          value={values.min}
          onChange={handleChangeMin}
          style={{ backgroundImage: `url(${SalaryIcon})` }}
        />
        <span className="range-separator">-</span>
        <input
          type="number"
          name="salaryRangeMax"
          id="range-max"
          placeholder="max"
          value={values.max}
          onChange={handleChangeMax}
          style={{ backgroundImage: `url(${SalaryIcon})` }}
        />
      </div>
    </label>
  )
}
