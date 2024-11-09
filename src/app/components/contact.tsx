import React from 'react'

const Contact = () => {
  return (
    <div className="contactMainBody" id='contact'>
    <h2> Lets <span>Contact Us</span></h2>
    <p>We would love to hear from you! Feel free to drop us a message.</p>
    <div className="form-container">
        <section className="section-wrapper">
            <div className="container">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/iahmedraza4/" target="_blank">
                        <button>LinkedIn</button>
                    </a>
                    <a href="https://github.com/Ahmed-Raza4" target="_blank">
                        <button>GitHub</button>
                    </a>
                </div>
                <div className="email-contact">
                    <p>Prefer direct email? Reach us at <a href="mailto:hafizahmedraza12345@gmail.com">HafizAhmedRaza12345@gmail.com</a></p>
                </div>
            </div>
        </section>
    </div>
</div>

  )
}

export default Contact