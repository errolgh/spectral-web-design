import React from 'react'
import devices from '../../assets/devices.svg'
import three_up_arrows from '../../assets/three_up_arrows.svg'
import nerd from '../../assets/nerd.svg'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { pageAnimation } from '../../animation'
//https://developedbyed.com/courses/1203573/lectures/26898958
export default function WhatWeDo(){
    const controls = useAnimation()
    const [element, view] = useInView( { threshold: 0.8 })
    if(view){
        controls.start('show')
    } else {
        controls.start('hidden')
    }
    return(
        <section class="what-we-do">
            <motion.div class="what-we-do-top" variants={pageAnimation} initial="hidden" animate={controls} ref={element}>
                <h2>What We Do</h2>
                <span>~* *~</span>
                <p>We are a nation-wide web development and design company based in Baltimore, MD. Our services cater to small businesses and professional individuals who want to grow and understand that a unique web presence is imperative in the age of cookie-cutter WordPress and Wix sites. <Link to="/pricing">LEARN MORE</Link></p>
            </motion.div>                                                                                     
            <div class="what-we-do-content">
                <div class="item">
                    <img src={devices} alt="devices"/>
                    <h3>Mobile-Responsive Design</h3>
                    <p>We understand that in today's digital landscape, your web presence needs to be designed for desktop, mobile devices, and everything in between.</p>
                </div>
                <div class="item">
                    <img src={three_up_arrows} alt="three up arrows"/>
                    <h3>SEO-Smart Performance</h3>
                    <p>We test website load times, accessibility, SEO-Keyword quality, and performance on every website. The metrics modern search engines use to determine where your site shows up in search results.</p>
                </div>
                <div class="item">
                    <img src={nerd} alt="nerd"/>
                    <h3>Hosting & Domain Maintenance</h3>
                    <p>Leave domain, hosting, and encryption to your techology professionals. Our service is meant to help you focus on your business -- leave the nerdy stuff to us.</p>
                </div>
            </div>
        </section>
    )
}