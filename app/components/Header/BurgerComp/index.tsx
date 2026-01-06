"use client"
import { useContext } from 'react'
import MobileMenubar from './MobileMenubar'
import BurgerMenu from './BurgerMenu'
import { HeaderContext } from '@/app/context/HeaderContext'

const BurgerComponent = () => {

    const  isMobileMenuShowing  = useContext(HeaderContext).isMobileMenuShowing;
    console.log("isMobileMenuShowing", isMobileMenuShowing);    
    return (
        <div className="md:hidden" >
            {isMobileMenuShowing ? <MobileMenubar /> : <BurgerMenu />}
        </div>
    )
}

export default BurgerComponent
