import React from 'react'

function Home() {
    return (
     <div className="tours">
            <h1>TOURS</h1>
            <div className="schedule">
                <div className="grid"><span className="date">JUL 16</span><span className="location">DETROIT, MI</span><span className="location">DTE ENERGY MUSIC THEATRE</span><button className="buyTicket">BUY TICKETS</button></div>
                <div className="grid"><span className="date">JUL 19</span><span className="location">TORONTO, ON</span><span className="location">BUDWEISSER STAGE</span><button className="buyTicket">BUY TICKETS</button></div>
                <div className="grid"><span className="date">JUL 22</span><span className="location">BRISTOW, VA</span><span className="location">JIGGY LUBE LIVE</span><button className="buyTicket">BUY TICKETS</button></div>
                <div className="grid"><span className="date">JUL 29</span><span className="location">PHOENIX, AZ</span><span className="location">AK-CHIN PAVILION</span><button className="buyTicket">BUY TICKETS</button></div>
                <div className="grid"><span className="date">AUG 2</span><span className="location">LAS VEGAS, NV</span><span className="location">T-MOBILE ARENA</span><button className="buyTicket">BUY TICKETS</button></div>
                <div className="grid"><span className="date" >AUG 7</span><span className="location">CONCORD, CA</span><span className="location">CONCORD PAVILION</span><button className="buyTicket">BUY TICKETS</button></div>
                
            </div>
        </div>
    )
}

export default Home
