import contact_us from '../../assets/contact_us.svg'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'

  // https://www.youtube.com/watch?v=NgWGllOjkbs
const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then((result) => {
          alert('Your email was sent successfully. Thank you!')
        },
        (error) => {
          alert('Something went wrong. Check your connection or try again later.')
        }
      )
    e.target.reset()
  }


export default function Contact(){
    return(
        <motion.section 
          id="contact-us"
          variants={pageAnimation}
          initial="hidden"
          animate="show">

            <div className="banner-container">
                <h1 className="banner">Contact Us</h1>
                <div className="banner-overlay"></div>
            </div>

            <div className="form-and-image-container">
                <form onSubmit={sendEmail} id="contact-form">
                    <h3>Get In Touch With Us</h3>
                    <input required placeholder="Full Name" type="text" name="full_name" />
                    <input placeholder="Business Name" type="text" name="business_name" />
                    <input required placeholder="Email" type="text" name="email_address" />
                    <input placeholder="Phone Number" type="text" name="phone_number" />
                    <textarea required placeholder="Message" name="message_body" ></textarea>
                    <button className="btn submit-btn" type="submit" value="Send" id="submit" label="submit" name="submit">Submit</button>
                </form>

                <div className="contact-image-container">
                    <img src={contact_us} alt="contact us"/>
                </div>
            </div>
        </motion.section>
    )
}