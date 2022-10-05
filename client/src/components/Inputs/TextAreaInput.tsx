import { TextAreaInputProps } from './type'

export const TextAreaInput = (props: TextAreaInputProps) => {
  const { name, value, placeholder, label, caption, handleChange } = props

  return (
    <label htmlFor={`textarea-${name}`} className="textarea">
      <span className="input__label">{label}</span>
      <textarea
        name={name}
        id={`textarea-${name}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        rows={3}
      ></textarea>
      {caption && <p className="input__caption">{caption}</p>}
    </label>
  )
}
