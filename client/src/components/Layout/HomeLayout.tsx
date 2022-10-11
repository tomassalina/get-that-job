import './HomeLayout.styless.scss'
import { Navbar } from '../Navbar'

type HomeLayoutProps = {
  children: JSX.Element
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  
  return (
    <div className='Container'>
      <Navbar />
      {children}
    </div>
  )
}
