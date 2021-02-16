import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
            <div id="logo">
                <div id="stamp"></div>
                <Link to="/">
                    <div className="company-name">
                        <h1><span id="spectral">Spectral</span><br/><span id="web-designs">Web Designs</span></h1>
                    </div>
                </Link>
            </div>

            <div className="footer-contact">
                <a href="mailto:ewatsonrei@gmail.com">ewatsonrei@gmail.com</a>
                <br/>
                <a href="tel:+9084721977">(908) 472-1977</a>
            </div>

            <div className="footer-lists">
                <ul className="footer-nav-list">
                <h4>Navigation</h4>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
                <ul className="footer-services-list">
                <h4>Services</h4>
                    <li>Web Development</li>
                    <li>Web Design</li>
                    <li>SEO Services</li>
                    <li>Website Maintenance</li>
                </ul>
            </div>




            <div className="branding">
                <p>Copyright © {new Date().getFullYear()} Spectral Web Designs | All Rights Reserved</p>
            </div>
        </footer>
    )
}