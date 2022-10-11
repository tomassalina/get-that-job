import { TextAreaInputProps } from './type'
import classNames from 'classnames'

export const TextAreaInput = (props: TextAreaInputProps) => {
  const {
    name,
    value,
    placeholder,
    label,
    caption,
    handleChange,
    error,
    touched,
    handleBlur,
  } = props

  const style = classNames(['textarea', { error: error && touched }])

  return (
    <label htmlFor={`textarea-${name}`} className={style}>
      <span className="input__label">{label}</span>
      <textarea
        name={name}
        id={`textarea-${name}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        rows={3}
        onBlur={handleBlur}
      ></textarea>
      {error && touched ? (
        <p className="input__caption error">{error}</p>
      ) : (
        caption && <p className="input__caption">{caption}</p>
      )}
    </label>
  )
}
