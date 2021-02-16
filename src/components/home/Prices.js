import { Link } from 'react-router-dom'

export default function Prices(){
    return (
        <section class="prices">
            
            <h2>Our Pricing</h2>
            <cite>(per month)</cite>
            
            <div class="price-boxes">

                <div class="price-box">
                    <h3>Standard</h3>
                    <span>Up to 5 Pages</span>
                    <p>$149</p>
                    <ul>
                        <li>Unlimited Edits</li>
                        <li>Includes Hosting</li>
                        <li>24/7 Customer Service</li>
                        <li>Lifetime Updates</li>
                    </ul>
                    <Link to="/contact">
                        <button>Learn More</button>
                    </Link>
                </div>

                <div class="price-box price-box-premium">
                    <h3>Standard + Blogging</h3>
                    <span>Starting At</span>
                    <p>$179</p>
                    <ul>
                        <li>All of Standard</li>
                        <li>SEO Analysis</li>
                        <li>Secure Content Creation Portal</li>
                        <li>Blog Page</li>
                    </ul>
                    <Link to="/contact">
                        <button>Learn More</button>
                    </Link>
                </div>

                <div class="price-box">
                    <h3>E-commerce</h3>
                    <span>Starting At</span>
                    <p>$249</p>
                    <ul>
                        <li>Store Front</li>
                        <li>Cart & Checkout Feature</li>
                        <li>Shopify Integration</li>
                        <li>Content Management Portal</li>
                    </ul>
                    <Link to="/contact">
                        <button>Learn More</button>
                    </Link>
                </div>

            </div>

        </section>
    )
}