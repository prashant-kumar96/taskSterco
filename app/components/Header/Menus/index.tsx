import { menu } from '@/app/constants/menu'
import { itemType } from '@/app/types/menu'
import Link from 'next/link'
import React from 'react'

const Menus = () => {
  return (
    <div className="hidden md:flex md:gap-[20px] lg:gap-[58px] items-center">
     {menu?.map((item: itemType) =>
        <Link key={item.label + "menu"} className="list-none text-[16px] 2xl:text-[20px]" href={item.src}>{item.label}</Link>
    )}
    </div>
  )
}

export default Menus
