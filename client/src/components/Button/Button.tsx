import './Button.styles.scss'


export const Button = ({text="Button",fill="outline"}) => {
  return (
    <button className={`buton ${fill}`}> {text}</button>
  )
}
