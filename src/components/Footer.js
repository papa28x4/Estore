import React from 'react'

function Footer() {
    return (
        <footer className="footer" style={{backgroundImage: 'linear-gradient(to top, #000000, #be2edd)'}}>
            <h3 className="footer-text">The Generics</h3>
            <div className="social">
                <img src="Images/Facebook Logo.png" alt="facebook logo" />
                <img src="Images/Spotify Logo.png" alt="Spotify logo" />
                <img src="Images/Youtube Logo.png" alt="Youtube logo" />
            </div>   
        </footer>
    )
}

export default Footer
