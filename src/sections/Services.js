
import React from 'react';

import ServiceItem from '../components/service-item';


const descriptions = {
  service1:'Space, the final frontier. These are the voyages of the Starship Enterprise.'
}

const Services = () => (
  <section id="two" className="wrapper style3 fade-up">
  <div className="inner">
    <h2>What we offer</h2>

    <div className="features">
      <ServiceItem icon='fa-code' title='Daybook' description={descriptions.service1}/>
      <ServiceItem icon='fa-lock' title='Rates' description={descriptions.service1}/>
      <ServiceItem icon='fa-cog' title='Inventory' description={descriptions.service1}/>
      <ServiceItem icon='fa-desktop' title='Channel Manager' description={descriptions.service1}/>
      <ServiceItem icon='fa-desktop' title='Booking Manager' description={descriptions.service1}/>
      <ServiceItem icon='fa-desktop' title='OTA specialist' description={descriptions.service1}/>
    </div>
  </div>
</section>

);

export default Services;