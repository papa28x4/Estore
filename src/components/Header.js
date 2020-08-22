import React from 'react';
import CartIcon from './CartIcon';
import {Link} from 'react-router-dom';

function Header() {
    return (
         <header className="header" style={{position: 'relative'}} >
                <nav>
                    <ul className="nav-links"> 
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/store">STORE</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                    <CartIcon />
                </nav>
                
                <h1 className="header-text">The Generics</h1>
               
            </header>
    )
}

export default Header
