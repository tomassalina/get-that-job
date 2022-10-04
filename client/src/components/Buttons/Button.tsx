import classNames from 'classnames'

import './Button.styles.scss'
import { ButtonProps } from './type'

export const Button = ({
  children,
  type,
  large,
  text,
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
        {children} <span>{text}</span>
      </>
    </button>
  )
}
