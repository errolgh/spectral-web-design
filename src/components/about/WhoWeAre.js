import owner from '../../assets/owner.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'

export default function WhoWeAre(){
    return (
        <motion.section 
            className="who-we-are"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >

            <div className="banner-container">
                <h1 className="banner">Who We Are</h1>
                <div className="banner-overlay"></div>
            </div>

            <img className="owner-picture" src={owner} alt="Errol Watson, Owner at Spectral Web Designs"/>
            
            <p>
                My name is Errol Watson, I'm a web developer and designer. I use a modern development pattern called jamstack to create fast and effective web products for small businesses and professionals. Marketing and showcasing entrepreneurship is truly a passion of mine, and I'm grateful to be able to do this for those who want to grow their digital footprint.
            </p>
            <p>
                I think it's wild that companies spend thousands of dollars upfront, and even <em>more</em> every month thereafter. It's easier for a small business to make monthly payments so they can invest more in other operations. I've created a business model that lets you participate on the web at a reasonable subscription rate for a custom web presence.
            </p>
            <Link to="/contact">
                <button className="btn">Work with Us</button>
            </Link>

        </motion.section>
    )
}