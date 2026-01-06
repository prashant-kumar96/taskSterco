
import BurgerComponent from './BurgerComp'
import Logo from './Logo'
import Menus from './Menus'


const Header = () => {
  return (
    <div className="flex items-center justify-between px-10">
      <Logo />
      <Menus />
      <BurgerComponent />
    </div>
  )
}

export default Header
