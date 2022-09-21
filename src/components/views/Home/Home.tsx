import './Home.styles.scss'

import { Header } from '../../Header'
import { HeroSection } from './sections/HeroSection'
import { MainSection } from './sections/MainSection'
import { TeamSection } from './sections/TeamSection'

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
