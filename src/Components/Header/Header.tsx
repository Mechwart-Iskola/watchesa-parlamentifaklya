import 'boxicons/css/boxicons.min.css';
import Cart from '../Cart/Cart';
import './header.css'
import { useEffect, useState } from 'react';

const Header = () => {

  const [theme, setTheme] = useState<boolean>(false);
  
  useEffect(() => {
    theme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');
  }, [theme])

  const [cart, setCart] = useState<boolean>();
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
        <header className="header" id="header">
            <nav >
                <a href="#" className="nav__logo">
                    <i className='bx bxs-watch nav__logo-icon'/> Rolex
                </a>
                <div className={`nav__menu ${toggle ? "show-menu" : ""}`} id="nav-menu">      
                    <ul className="nav__list">
                        {["HOME", "FEATURED", "PRODUCTS", "NEW"].map((item, idx) => (
                            <li key={idx} className='nav__item'>
                                <a href={`#${item.toLowerCase()}`} className='nav__link'>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x' onClick={() => setToggle(false)}/>
                    </div>
                </div>
                <div className="nav__btns">           
                    <i className='bx bx-moon change-theme' id="theme-button" onClick={() => setTheme(!theme)}/>
                    <div className="nav__shop" id="cart-shop" >
                        <i className='bx bx-shopping-bag' onClick={() => setCart(true)}/>
                    </div>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-grid-alt' onClick={() => setToggle(true)} />
                    </div>
                </div>
            </nav>
        </header>
        {cart && <Cart cartprop={cart} OnClose={() => setCart(false)}/>}
     </>
  )
}

export default Header