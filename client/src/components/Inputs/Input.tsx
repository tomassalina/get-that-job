import { InputProps } from './type'

export const Input = (props: InputProps) => {
  const {
    type,
    name,
    value,
    placeholder,
    label,
    caption,
    required,
    autocomplete,
    handleChange,
  } = props

  return (
    <label htmlFor={`input-${name}`} className="input">
      <span className="input__label">{label}</span>
      <input
        type={type}
        name={name}
        id={`input-${name}`}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        onChange={handleChange}
      />
      {caption && <p className="input__caption">{caption}</p>}
    </label>
  )
}
