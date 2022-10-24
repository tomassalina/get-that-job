interface DisplayCardProps {
  type: string
  title: string
  logo: string
}

export const DisplayCard = ({ title, logo, type }: DisplayCardProps) => {
  return (
    <li className="Display">
      <p className="Display__type">{type}</p>
      <div className="Display__description">
        <img src={logo} alt="" />
        <h3>{title}</h3>
      </div>
    </li>
  )
}
