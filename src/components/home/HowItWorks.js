import infinite_edits from '../../assets/infinite_edits.svg'
import web_development from '../../assets/web_development.svg'
import hosting from '../../assets/hosting.svg'
import contact from '../../assets/contact.svg'

export default function HowItWorks(){
    return (
        <section className="how-it-works">
            
            <h2>How It Works</h2>

            <div className="gearbox">
                <svg class="colored-gear gear" xmlns="http://www.w3.org/2000/svg" fill="#663399"  viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                <svg class="dark-gear gear" xmlns="http://www.w3.org/2000/svg" fill="green"  viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
            </div>

            <div className="text-after-gears">
                <h3 className="no-money-down">$0 down. Starting at $149 per month.<br/>No contract. Cancel whenever you want.</h3>
                <p className="standard-5-page-site">No money down for a standard 5 page website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.</p>
            </div>



            {/* kinda give a rundown of what working with you is like in the alternating feature pattern */}

            
            <div className="work-phase-list">
                <div className="work-phase">
                    <div className="how-it-works-text">
                        <h4>Unlimited Edits</h4>
                        <p>Make any design changes you want at anytime at no extra cost.</p>
                    </div>
                    <div className="how-it-works-art">
                        <img src={infinite_edits} alt="Infinite Edits"/>
                    </div>
                </div>                        

                <div className="work-phase">
                    <div className="how-it-works-art">
                        <img src={web_development} alt="Infinite Edits"/>
                    </div>
                    <div className="how-it-works-text">
                        <h4>Web Design & Development</h4>
                        <p>Professional web designs created in-house. We build a completely custom website for you. Absolutely no automated page builders.</p>
                    </div>
                </div>                

                <div className="work-phase">
                    <div className="how-it-works-text">
                        <h4>Hosting Management</h4>
                        <p>Hosting fees are built into monthly payments. We also have domain management services.</p>
                    </div>
                    <div className="how-it-works-art">
                        <img src={hosting} alt="Infinite Edits"/>
                    </div>
                </div>                

                <div className="work-phase">
                    <div className="how-it-works-art">
                        <img src={contact} alt="Infinite Edits"/>
                    </div>
                    <div className="how-it-works-text">
                        <h4>Human Customer Service</h4>
                        <p>Contact us anytime and communicate with a real human.</p>
                    </div>
                </div>                
            </div>

        </section>
    )
}