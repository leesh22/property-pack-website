import React from 'react';
import logo from '../images/pp-logo.png';
import Scroll from '../components/Scroll';


const Intro = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <img className="logo-main" src={logo} alt="" data-position="25% 25%" />
      <p>
        Just another Channel Manager
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              More info
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Intro;
