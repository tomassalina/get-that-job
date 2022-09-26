import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './Button.styles.scss'

import { ButtonProps } from './type'

export const Button = ({
  children,
  type,
  large,
  text,
  isLink,
  to,
  handleClick,
}: ButtonProps) => {
  const styles = classNames('btn', `btn-${type}`, { large })

  if (isLink)
    return (
      <Link className={styles} to={to ? to : '/'}>
        <>
          {children} <span>{text}</span>
        </>
      </Link>
    )

  return (
    <button type="button" onClick={handleClick} className={styles}>
      <>
        {children} <span>{text}</span>
      </>
    </button>
  )
}
