import { menu } from '@/app/constants/menu'
import { itemType } from '@/app/types/menu'
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";

interface props {
 handleMobileMenuToggle: () => void
}

const MobileMenubar = ({handleMobileMenuToggle}:props) => {
  return (
    <div className='w-screen p-10 border-b-1 border-white'>
      <IoMdClose className="absolute top-4 right-4 text-xl cursor-pointer" onClick={handleMobileMenuToggle}/>
      <div className="flex flex-col gap-y-3 items-center">
        {menu?.map((item: itemType) =>
          <Link key={item.label + "menu"} className="list-none text-[16px] 2xl:text-[20px]" href={item.src}>{item.label}</Link>
        )}

      </div>
    </div>
  )
}

export default MobileMenubar
