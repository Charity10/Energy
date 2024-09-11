
const NavLinks = ({isClicked, closeMenu}) => {
  return (
    <nav className='NavLinks'>
      <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/#About'>About Us</a></li>
          <li><a href='#
          /Services'>Services</a></li>
          <li><a href='/#Contact'>Contact us</a></li>
        </ul>
    </nav>
      )
}

export default NavLinks;