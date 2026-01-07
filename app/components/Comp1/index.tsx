"use client"
import Image from 'next/image'

const Comp1 = () => {
  return (
    <div className="min-h-68 sm:min-h-80 md:min-h-120 lg:min-h-160  text-white relative">
      <Image src="/military2x.png" alt="military" fill={true} />
      <div className="hidden w-[400px] h-[150px] lg:block absolute bottom-40 right-20 lg:right-10">
        <p className="absolute top-[-12] left-0 sm:text-[20px] font-bold text-white">Aven</p>
        <p className="w-full h-full text-left font-bold sm:text-[48px] text-white">
          PASSIONATE ABOUT SAVING LIVES
        </p>
      </div>
      <div className="absolute bottom-4 text-center w-full lg:hidden">
        <p className="text-xl">Aven</p>
        <p className="text-2xl">
          PASSIONATE ABOUT SAVING LIVES
        </p>
      </div>
   
    </div>
  )
}

export default Comp1