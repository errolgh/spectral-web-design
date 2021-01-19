import { Link } from 'react-router-dom'

export default function WhatWeDo(){
    return(
        <section class="what-we-do">
            <div class="what-we-do-top">
                <h2>What We Do</h2>
                <span>~* *~</span>
                <p>We are a nation-wide web development and design company based in Baltimore, MD. Our services cater to small businesses and professional individuals who want to grow and understand that a unique web presence is imperative in the age of cookie-cutter WordPress and Wix sites. <Link to="/pricing">LEARN MORE</Link></p>
            </div>                                                                                     
            <div class="what-we-do-content">
                <div class="item">
                    <div class="icon">A</div>
                    <h3>Mobile-Responsive Design</h3>
                    <p>Description Lorem ipsum dolor looks great on tables and smart phones. Eveniet, suscipit ad!</p>
                </div>
                <div class="item">
                    <div class="icon">B</div>
                    <h3>SEO-Smart</h3>
                    <p>Lighthouse responsive accessible keyword-rich fast loading times SEO-friendly.</p>
                </div>
                <div class="item">
                    <div class="icon">C</div>
                    <h3>Hosting & Domain Maintenance</h3>
                    <p>Description server domain consectetur protected. Renewal, itaque?</p>
                </div>
            </div>
        </section>
    )
}