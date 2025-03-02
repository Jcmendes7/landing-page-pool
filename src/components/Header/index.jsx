import './style.css'
import '../../global.css'
import {useState} from 'react'
import logo from '../../assets/logo.png'
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(prevState => !prevState);
      console.log("Menu aberto?", !isMenuOpen);
    };
  
    return (
      <header className="header">
         <img className='logo' src={logo} alt="" /> 
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="tel:+5518996926998">Contato</a></li>
          </ul>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      </header>
    );
  }