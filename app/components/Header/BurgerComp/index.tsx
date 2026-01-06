"use client"
import { useState } from 'react'
import MobileMenubar from './MobileMenubar'
import BurgerMenu from './BurgerMenu'

const BurgerComponent = () => {

    const [isMobileMenuShowing, setIsMobileMenuShowing] = useState(false)

    const handleMobileMenuToggle = () => {
        try {
            setIsMobileMenuShowing((prev) => !prev)
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <div className="md:hidden" >
            {isMobileMenuShowing ? <MobileMenubar handleMobileMenuToggle={handleMobileMenuToggle}/> : <BurgerMenu handleMobileMenuToggle={handleMobileMenuToggle} />}
        </div>
    )
}

export default BurgerComponent
