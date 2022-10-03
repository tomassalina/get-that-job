export interface TextAreaProps {
 
  name: string
  value: string
  placeholder: string
  label: string
  caption?: string
  required?: boolean
  autocomplete?: string
  handleChange: () => void
}
