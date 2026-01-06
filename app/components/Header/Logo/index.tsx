import Image from 'next/image'

const Logo = () => {
  return (
    <div className="w-[100px] md:w-[105px] h-[30px]  md:h-[32px] relative my-6 md:my-7">
      <Image src="/header/logo.png" alt="logoImage" fill={true} />
    </div>
  )
}

export default Logo
