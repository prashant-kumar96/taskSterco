import Image from 'next/image'
import Header from './components/Header'

const LandingPage = () => {
  return (
    <div className="relative bg-[url('/military2x.png')] bg-cover bg-no-repeat bg-center min-h-68 sm:min-h-80 md:min-h-120 lg:min-h-screen">
      <Header />
      <div className="sm:w-[400px] sm:h-[150px] absolute sm:top-[329px] sm:right-50">
        <p className="absolute top-[-12] left-0 sm:text-[20px] font-bold">Aven</p>
        <p className="w-full h-full text-left font-bold sm:text-[48px] text-white">
          PASSIONATE ABOUT SAVING LIVES
        </p>
      </div>
    </div>
  )
}

export default LandingPage
