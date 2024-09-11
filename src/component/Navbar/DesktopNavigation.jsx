import NavLinks from "./NavLinks";

const DesktopNavigation = () => {
  return (
    <nav className='DesktopNavigation'>
      <div className="logo">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-7XYANx1UcrzOqwTQR5gl5WXdqR2YXVR9g&s' alt='app-logo' className='nav-img' />
        <h1 className='h1'>E~D~B~N</h1>
      </div>
      
      <NavLinks />
    </nav>
  )
}



export default DesktopNavigation