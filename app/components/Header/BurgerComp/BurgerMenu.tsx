import Image from 'next/image'

interface props {
 handleMobileMenuToggle: () => void
}

const BurgerMenu = ({ handleMobileMenuToggle }:props) => {
  return (
    <div className="relative h-[16px] w-[24px] cursor-pointer " onClick={handleMobileMenuToggle}>
      <Image src="/header/Icon feather-menu@2x.png" alt="burger-menu" fill={true} />
    </div>
  )
}

export default BurgerMenu
