import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
    const [navToggle, setNavToggle] = useState(false)
    return(
        <nav>

                <Link to="/">
                    <div id="logo">
                        <div id="stamp"></div>
                        <div className="company-name">
                            <h1><span id="spectral">Spectral</span><br/><span id="web-designs">Web Designs</span></h1>
                        </div>
                    </div>
                </Link>

            <ul id="nav-list" className={navToggle ? 'active' : ''}>
                {/* <li className="nav-link"><Link to="/">Home</Link></li> */}
                {/* <li className="nav-link"><Link to="/services">Services</Link></li> */}
                <li onClick={()=> setNavToggle(false)} className="nav-link"><Link to="/about">About</Link></li>
                <li onClick={()=> setNavToggle(false)} className="nav-link"><Link to="/contact">Contact</Link></li>
            </ul>
            
            <div onClick={()=> setNavToggle(navToggle => !navToggle)} id="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>       
    )
}