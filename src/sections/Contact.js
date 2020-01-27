
import React from 'react';


const Contact = () => (

  <section id="three" className="wrapper style1 fade-up">
  <div className="inner">
    <h2>Get in touch</h2>
    <p>
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
      turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
      lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
      imperdiet est velit quis lorem.
    </p>
    <div className="split style1">
      <section>
        <form method="post" action="#" data-netlify="true">
          <div className="fields">
            <div className="field half">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="5" />
            </div>
          </div>
          <ul className="actions">
            <li>
              <a href="/#" className="button submit">
                Send Message
              </a>
            </li>
          </ul>
        </form>
      </section>
      <section>
        <ul className="contact">
          <li>
            <h3>Email</h3>
            <a href="/#">user@untitled.tld</a>
          </li>
          <li>
            <h3>Social</h3>
            <ul className="icons">
              <li>
                <a href="/#" className="fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="/#" className="fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="/#" className="fa-github">
                  <span className="label">GitHub</span>
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