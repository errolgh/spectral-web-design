export default function Footer(){
    return(
        <footer>
            <div id="logo">
                <div id="stamp"></div>
                <div className="company-name">
                    <h1><span id="spectral">Spectral</span><br/><span id="web-designs">Web Designs</span></h1>
                </div>
            </div>

            <div className="footer-contact">
                <p>email@gmail.com</p>
                <p>(XXX) XXX-XXXX</p>
            </div>

            <div className="footer-lists">
                <ul className="footer-nav-list">
                <h4>Navigation</h4>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
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