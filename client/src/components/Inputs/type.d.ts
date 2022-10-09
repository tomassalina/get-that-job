type InputType = 'text' | 'tel' | 'date' | 'url'
type FormikHandleChange = {
  (e: ChangeEvent<any>): void
  <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
    ? void
    : (e: string | ChangeEvent<any>) => void
}

export interface InputProps {
  type: InputType
  name: string
  value: string
  label: string
  placeholder: string
  caption?: string
  required?: boolean
  autocomplete?: string
  handleChange: FormikHandleChange
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
  value: { file: object, path: string }
}
