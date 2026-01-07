"use client"
import { useState } from 'react'
import BurgerComponent from './BurgerComp'
import Menus from './Menus'
import { createContext } from 'vm'
import Logo from './Logo'
import { HeaderContext } from '@/app/context/HeaderContext'

const Header = () => {
  const [isMobileMenuShowing, setIsMobileMenuShowing] = useState(false)
  const handleMobileMenuToggle = () => {
    try {
      setIsMobileMenuShowing((prev) => !prev)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div className={`relative fixed border-b-1 border-white bg-[#000000c9] w-full flex items-center justify-between lg:justify-around ${!isMobileMenuShowing && 'px-10'}`}>
      <HeaderContext.Provider value={{ isMobileMenuShowing, setIsMobileMenuShowing, handleMobileMenuToggle }}>
        <Logo />
        <Menus />
        <BurgerComponent />
      </HeaderContext.Provider>
    </div>
  )
}

export default Header
