import './style.css'
import '../../global.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export function Footer() {
    return (
      <footer className="footer">
        <div className='social-midia-container'>
          <p id='social-midia'>/siga a gente</p>
          <a href=""> <FaFacebookF size={25}/> </a>
          <a href=""> <FaInstagram size={25}/> </a>
        </div>
        <div className='contato'>
          <p >/Entre em contato:</p>
          <p>📞 <a href="tel:+5518996926998">(18) 996926998</a></p>
          <p>📧 <a href="zpiscineiro@gmail.com">zpiscineiro@gmail.com</a></p>
          <p>📍 Atendemos em Birigui-SP</p>
        </div>
      </footer>
    );
  }
  