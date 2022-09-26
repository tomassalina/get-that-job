import { IconButtonProps } from './type'
import classNames from 'classnames'

export const IconButton = ({ icon, activeIcon, active }: IconButtonProps) => {
  const styles = classNames('btn', 'btn-icon', { active })
  return (
    <button type="button" className={styles}>
      <img src={active ? activeIcon : icon} alt="Icon" />
    </button>
  )
}
