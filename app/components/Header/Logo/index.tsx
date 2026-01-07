import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link className="w-[100px] md:w-[105px] h-[30px]  md:h-[32px] relative my-6 md:my-7" href="/">
      <Image src="/header/logo.png" alt="logoImage" fill={true} />
    </Link>
  )
}

export default Logo
