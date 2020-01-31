
import React from 'react';

import Form from '../components/Form';

const Contact = () => (

  <section id="contact" className="wrapper style1 fade-up">
  <div className="inner">
    <h2>Get in touch</h2>
    <p>
      For more information on our services send us a message using the form below, or reach out to us on social media.
    </p>
    <div className="split style1">
      <section>
        <Form/>
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
                <a href="https://www.facebook.com/The-Property-Pack-115271693359441/" target="_blank" className="fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/the_property_pack/" target="_blank" className="fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              {/* <li>
                <a href="/#" target="_blank" className="fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li> */}
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </div>
</section>

);

export default Contact;
