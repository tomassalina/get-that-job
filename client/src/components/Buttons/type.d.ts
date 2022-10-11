type ButtonType = 'primary' | 'secondary' | 'disabled' | 'ghost'

export interface ButtonProps {
  type: ButtonType
  text: string
  large?: boolean
  children?: ReactNode
  iconRight?: boolean
  handleClick: () => void
}

export interface LinkButtonProps {
  type: ButtonType
  text: string
  large?: boolean
  children?: ReactNode
  to: string
}

export interface IconButtonProps {
  icon: string
  activeIcon: string
  active?: boolean
}
