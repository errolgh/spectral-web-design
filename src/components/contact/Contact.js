import contact_us from '../../assets/contact_us.svg'

export default function Contact(){
    return(
        <section id="contact-us">
            <div className="banner-container">
                <h1 className="banner">Contact Us</h1>
                <div className="banner-overlay"></div>
            </div>

            <div className="form-and-image-container">
                <form id="contact-form">
                    <h3>Get In Touch WIth Us</h3>
                    <input required placeholder="Full Name" type="text"/>
                    <input placeholder="Business Name" type="text"/>
                    <input required placeholder="Email" type="text"/>
                    <input placeholder="Phone Number" type="text"/>
                    <textarea required placeholder="Message" name="" id=""></textarea>
                    <button type="submit" id="submit" label="submit" name="submit">Submit</button>
                </form>

                <div className="contact-image-container">
                    <img src={contact_us} alt="contact us"/>
                </div>
            </div>
        </section>
    )
}