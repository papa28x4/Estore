import React from 'react';
import CartIcon from './CartIcon';
import {Link} from 'react-router-dom';

function Header() {
    return (
         <header className="header" style={{position: 'relative'}} >
                <nav style={{display: 'flex', alignItems: 'center', 'zIndex': 10, width:'100%', position:'fixed', top: '0',
                backgroundImage: 'linear-gradient(to top, #000000, #be2edd)'
                 }}>
                    <ul className="nav-links"> 
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/store">STORE</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                    <CartIcon />
                </nav>
                
                <h1 style={{paddingTop: '61px'}}>The Generics</h1>
               
            </header>
    )
}

export default Header
