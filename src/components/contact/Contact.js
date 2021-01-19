
export default function Contact(){
    return(
        <section id="contact-us">
            <div className="banner-container">
                <h1 className="banner">Contact Us</h1>
            </div>

            <div className="form-and-image-container">
                <form id="contact-form">
                    <input placeholder="Name" type="text"/>
                    <input placeholder="Business" type="text"/>
                    <input placeholder="Email Address" type="text"/>
                    <input placeholder="Phone Number" type="text"/>
                    <textarea placeholder="Type your message here" name="" id=""></textarea>
                </form>

                <div className="contact-image-container">
                    <img src="../../assets/contact-us" alt=""/>
                </div>
            </div>
        </section>
    )
}