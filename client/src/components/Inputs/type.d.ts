type InputType = 'text' | 'tel' | 'date' | 'url' | 'input'

type FormikHandleChange = {
  (e: ChangeEvent<any>): void
  <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
    ? void
    : (e: string | ChangeEvent<any>) => void
}

type FormikHandleBlur = {
  (e: React.FocusEvent<any, Element>): void
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
}

export interface InputProps {
  type: InputType
  name: string
  value?: string
  label: string
  placeholder: string
  caption?: string
  required?: boolean
  autocomplete?: string
  handleChange: FormikHandleChange
  error?: string
  touched?: boolean
  handleBlur?: FormikHandleBlur
  size?: string
  img?: string
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
  value: { file: object; path: string }
}

export interface RangeInputProps {
  values: { min: number | ''; max: number | '' }
  label: string
  handleChangeMin: FormikHandleChange
  handleChangeMax: FormikHandleChange
}
