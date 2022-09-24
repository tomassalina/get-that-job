export interface ButtonProps {
  text: string
  icon: string
  type: 'primary' | 'secondary' | 'disabled' | 'ghost'
  large?: boolean
  isFile?: boolean
  isLink?: boolean
  to?: string
}
