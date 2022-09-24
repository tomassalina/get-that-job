import { Header } from '../Header'

type LayoutProps = {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
