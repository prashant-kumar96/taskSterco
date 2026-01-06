import Image from 'next/image'

const Logo = () => {
  return (
    <div className="w-[150px] h-[45px] 2xl:w-[300px] 2xl:h-[90px] relative my-4">
      <Image src="/header/logo.png" alt="logoImage" fill={true} />
    </div>
  )
}

export default Logo
