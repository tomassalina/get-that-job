import { InputProps } from './type'
import classNames from 'classnames'

export const Input = (props: InputProps) => {
  const {
    type,
    name,
    value,
    defaultValue,
    placeholder,
    label,
    caption,
    required,
    autocomplete,
    handleChange,
    error,
    touched,
    handleBlur,
    size,
    img,
  } = props

  const style = classNames(['input', { error: error && touched }])

  return (
    <label htmlFor={`input-${name}`} className={style}>
      <span className="input__label">{label}</span>
      <input
        type={type}
        name={name}
        id={`input-${name}`}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ background: `url(${img})no-repeat left` }}
      />  
      {error && touched ? (
        <p className="input__caption error">{error}</p>
      ) : (
        caption && <p className="input__caption">{caption}</p>
      )}
    </label>
  )
}
