import Hero from './Hero'
import WhatWeDo from './WhatWeDo'
import HowItWorks from './HowItWorks'
import Prices from './Prices'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'

export default function Home () {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >

            <Hero />
            <WhatWeDo />
            <HowItWorks />
            <Prices />
        </motion.div>
    )
}