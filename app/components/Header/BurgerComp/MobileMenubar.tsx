import { menu } from '@/app/constants/menu'
import { HeaderContext } from '@/app/context/HeaderContext';
import { itemType } from '@/app/types/menu'
import Link from 'next/link'
import { useContext } from 'react';
import { IoMdClose } from "react-icons/io";

interface props {
 handleMobileMenuToggle: () => void
}

const MobileMenubar = ({}) => {

  const handleMobileMenuToggle:props = useContext(HeaderContext).handleMobileMenuToggle;
  return (
    <div className='w-screen py-10 border-b-1 border-white bg-gray-800 opacity-90'>
      <IoMdClose className="absolute top-7 right-10 text-2xl cursor-pointer text-white" onClick={handleMobileMenuToggle}/>
      <div className="flex flex-col gap-y-3 items-center">
        {menu?.map((item: itemType) =>
          <Link key={item.label + "menu"} className="list-none text-[16px] 2xl:text-[20px] text-white" href={item.src}>{item.label}</Link>
        )}

      </div>
    </div>
  )
}

export default MobileMenubar
