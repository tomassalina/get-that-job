type InputType = 'text' | 'tel' | 'date' | 'url'

export interface InputProps {
  type: InputType
  name: string
  value: string
  placeholder: string
  label: string
  caption?: string
  required?: boolean
  autocomplete?: string
  handleChange: () => void
}
