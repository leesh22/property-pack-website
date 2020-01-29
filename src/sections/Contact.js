
import React from 'react';


const Contact = () => (

  <section id="three" className="wrapper style1 fade-up">
  <div className="inner">
    <h2>Get in touch</h2>
    <p>
      For more information on our services send us a message using the form below, or reach out to us on social media.
    </p>
    <div className="split style1">
      <section>
      <form name="contact" method="POST" data-netlify="true" action="/thanks">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        <input type="hidden" name="form-name" value="contact" />
        </form>
        {/* <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
          <div className="fields">
            <p className="field half">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </p>
            <p className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </p>
            <p className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" />
            </p>
          </div>
          <ul className="actions">
            <li>
              <button type="submit" className="button submit" >Send Message</button>
            </li>
          </ul>
        </form> */}
      </section>
      <section>
        <ul className="contact">
          <li>
            <h3>Email</h3>
            <a href="mailto:info@thepropertypack.com">info@thepropertypack.com</a>
          </li>
          <li>
            <h3>Social</h3>
            <ul className="icons">
              <li>
                <a href="/#" className="fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="/#" className="fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="/#" className="fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </div>
</section>

);

export default Contact;