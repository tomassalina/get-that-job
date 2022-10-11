import classNames from 'classnames'

import './Button.styles.scss'
import { ButtonProps } from './type'

export const Button = ({
  type,
  large,
  text,
  children,
  iconRight,
  handleClick,
}: ButtonProps) => {
  const styles = classNames('btn', `btn-${type}`, { large })

  return (
    <button
      type="button"
      disabled={type === 'disabled'}
      onClick={handleClick}
      className={styles}
    >
      <>
        {!iconRight && children} <span>{text}</span>
        {iconRight && children}
      </>
    </button>
  )
}
