import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './Button.styles.scss'

import { ButtonProps } from './type'

export const Button = ({
  type,
  large,
  text,
  icon,
  isFile,
  isLink,
  to,
}: ButtonProps) => {
  const buttonClasses = classNames('btn', `btn-${type}`, { large })

  if (isLink)
    return (
      <Link className={buttonClasses} to={to ? to : '/'}>
        <img src={icon} alt="icon" />
        <span>{text}</span>
      </Link>
    )

  if (isFile) return <input type="file" name="" id="" />

  return (
    <button type="button" className={buttonClasses}>
      {icon ? <img src={icon} alt="" /> : null}
      <span>{text}</span>
    </button>
  )
}
