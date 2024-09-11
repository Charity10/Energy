import { useState } from "react";
import NavLinks from "./NavLinks";
import { CgMenuHotdog } from "react-icons/cg";
import {MdClose} from 'react-icons/md'


const MobileNavigation = () => {
 const [click, setClick] = useState(false);
 const closeMenu = () => setClick(false);
 
const Hamburger = <CgMenuHotdog className="HamburgerMenu" 
size={30} 
onClick={() => setClick(!click)}
color='#7ed321' />;

const Close = <MdClose className="HamburgerMenu" size="30px" color="#7ed321" onClick={() => setClick(!click)} />

  return (
    <nav className='MobileNavigation'>
      <div className="logo">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-7XYANx1UcrzOqwTQR5gl5WXdqR2YXVR9g&s' alt='app-logo' className='nav-img' />
        <h1 className='h1'>E~D~B~N</h1>
      </div>
      { click ? Close : Hamburger}
     {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
    </nav>
  )
}



export default MobileNavigation;