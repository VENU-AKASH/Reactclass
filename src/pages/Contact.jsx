function Contact() {
    return (
      <section className="page">
        <div className="page-header">
          <p className="tagline">GET IN TOUCH</p>
          <h1>Contact Us</h1>
  
          <p>
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
  
        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's Talk</h2>
  
            <p>
              Our team is ready to help you turn your ideas into powerful
              digital solutions.
            </p>
  
            <p>📧 hello@technova.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Bangalore, India</p>
          </div>
  
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
  
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;