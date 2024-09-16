import './footer.css'
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {

  return (
    <div className='footer'>
    <h1> Energy Data Bank Nigeria</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#about-us">About</a></li>
      <li><a href="">Servies</a></li>
      <li><a href="">Contact us</a></li>
    </ul>

    <div className="socials">
    <a href="https://www.instagram.com/mi_umercy/"><FaInstagram /> </a>
    <a href="https://www.youtube.com/channel/UCpUoWbEWC4OBMhOs-GAgeeA"><BsTwitterX />
    </a>
    <a href="https://github.com/Charity10"><FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/mercy-umoh/"><FaLinkedin />
    </a>
    </div>
     
     <p>Copyright © 2024 All rights reserved | built with love by Mercy Umoh</p>
    </div>
  )
}

export default Footer