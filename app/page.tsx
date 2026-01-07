import Image from 'next/image'
import Header from './components/Header'
import Comp1 from './components/Comp1'
import LatestNews from './components/LatestNews'

const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('/military2x.png')] bg-cover bg-no-repeat bg-center min-h-68 sm:min-h-80 md:min-h-120 lg:min-h-screen">
        <Header />
        <Comp1 />
      </div>
      <LatestNews />
    </>
  )
}

export default LandingPage
