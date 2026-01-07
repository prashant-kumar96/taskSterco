import Image from 'next/image'
import Header from './components/Header'
import Comp1 from './components/Comp1'
import LatestNews from './components/LatestNews'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Comp1 />
      <LatestNews />
    </>
  )
}

export default LandingPage
