export interface ButtonProps {
  type: 'primary' | 'secondary' | 'disabled' | 'ghost'
  text: string
  children?: ReactNode
  large?: boolean
  isLink?: boolean
  to?: string
  handleClick?: () => void
}
