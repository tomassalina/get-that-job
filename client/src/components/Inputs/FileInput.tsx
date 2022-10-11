import { FileInputProps } from './type'

export const FileInput = (props: FileInputProps) => {
  const { name, value, label, caption, handleChange, accept } = props

  return (
    <label htmlFor={`file-input-${name}`} className="file-input">
      <span className="input__label">{label}</span>
      <input
        type="file"
        name={name}
        id={`file-input-${name}`}
        accept={accept}
        value={value.path}
        onChange={handleChange}
      />
      {caption && <p className="input__caption">{caption}</p>}
    </label>
  )
}
