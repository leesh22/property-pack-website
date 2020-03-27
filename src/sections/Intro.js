import React from 'react';
import logo from '../images/pp-logo.png';
import Scroll from '../components/Scroll';


const Intro = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <img className="logo-main" src={logo} alt="" data-position="25% 25%" />
      <p>Changing the travel Industry 1 reservation at a time!</p>
      <p>
      An all in one system which helps hotels, hostels, vacation rentals, guesthouses and homestays save time and automate operations. Read on to see how we can optimize your OTAs for more reservations.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="who">
            <a href="#who" className="button">
              More info
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Intro;
