import './Home.styles.scss'

import { Header } from '../../Header'
import { HeroSection } from './HeroSection'
import { MainSection } from './MainSection'
import { TeamSection } from './TeamSection'

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MainSection />
      <TeamSection />
    </>
  )
}
