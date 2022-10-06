type InputType = 'text' | 'tel' | 'date' | 'url' | 'input'

export interface InputProps {
  type: InputType
  name: string
  value: string
  label: string
  placeholder: string
  caption?: string
  required?: boolean
  autocomplete?: string
  handleChange: () => void
}

export type TextAreaInputProps = Omit<
  InputProps,
  'type' | 'required' | 'autocomplete'
>

type FileInput = Omit<
  InputProps,
  'type' | 'placeholder' | 'required' | 'autocomplete'
>

export interface FileInputProps extends FileInput {
  maxSize: number
  accept: string
}
