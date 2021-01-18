import TextLoop from 'react-text-loop'

export default function Hero(){
    return(
        <section className="landing">
            <div className="landing-background">

                <div class="custom-shape-divider-bottom-1610346266">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                {/* <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
                <div className="circle circle6"></div>
                <div className="circle circle7"></div>
                <div className="circle circle8"></div> */}
                {/* <div className="circle circle9"></div> */}
                
            </div>

                <div className="top-content">
                    <h2 className="tagline">Blazing-Fast, Custom-Built, Modern Websites For Businesses</h2>
                    <h3 className="sub-tagline">Designed to&nbsp;
                        <TextLoop className="cycle-text" mask={true} springConfig={{ stiffness: 50, damping: 12 }} interval={3000} children={["Inspire.", "Captivate.", "Empower.", "Work."]} />
                    </h3>
                    <button className="btn">Contact Us</button>
                </div>
                

        </section>
    )
}