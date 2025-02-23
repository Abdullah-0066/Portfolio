import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/shark3.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-o items-center">
            <a href="/" aria-label="Home">
             <img src={logo} className="mx-2" width={50} height={30} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/abdullaht25/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/Abdullah-0066" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/_.abdullah0066?igsh=djR1ejlxNW9rbWJn&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram">
                <FaInstagram/>
            </a>
            <a href="https://www.facebook.com/share/1DWebVgL3W/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook">
                <FaFacebook/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar
