import "./TextArea.styles.scss";
import { TextAreaProps } from "./type";

export const TextArea = (props: TextAreaProps) => {
  const {
    name,
    value,
    placeholder,
    label,
    caption,
    required,
    autocomplete,
    handleChange,
  } = props;

  return (
    <label htmlFor={`input-${name}`} className="input">
      <span className="input__label">{label}</span>
      <textarea
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
  );
};
