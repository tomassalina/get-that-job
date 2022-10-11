import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { LinkButtonProps } from './type'

export const LinkButton = ({
  children,
  type,
  text,
  to,
  large,
}: LinkButtonProps) => {
  const styles = classNames('btn', `btn-${type}`, { large })

  return (
    <Link className={styles} to={to}>
      <>
        {children} <span>{text}</span>
      </>
    </Link>
  )
}
