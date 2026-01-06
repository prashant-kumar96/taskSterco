import { HeaderContext } from '@/app/context/HeaderContext';
import Image from 'next/image'
import { useContext } from 'react';

interface props {
 handleMobileMenuToggle: () => void
}

const BurgerMenu = () => {
   const handleMobileMenuToggle:props = useContext(HeaderContext).handleMobileMenuToggle;
  return (
    <div className="relative h-[16px] w-[24px] cursor-pointer " onClick={handleMobileMenuToggle}>
      <Image src="/header/Icon feather-menu@2x.png" alt="burger-menu" fill={true} />
    </div>
  )
}

export default BurgerMenu
