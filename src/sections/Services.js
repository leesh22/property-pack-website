
import React from 'react';

import ServiceItem from '../components/service-item';


const descriptions = {
  daybook:'Space, the final frontier. These are the voyages of the Starship Enterprise.',
  rates:'Space, the final frontier. These are the voyages of the Starship Enterprise.',
  inventory:'Space, the final frontier. These are the voyages of the Starship Enterprise.',
  cm:'Space, the final frontier. These are the voyages of the Starship Enterprise.',
  bm:'Space, the final frontier. These are the voyages of the Starship Enterprise.',
  specialist:'Space, the final frontier. These are the voyages of the Starship Enterprise.'
}

const Services = () => (
  <section id="what" className="wrapper style3 fade-up">
  <div className="inner">
    <h2>What we offer</h2>

    <div className="features">
      <ServiceItem icon='fa-code' title='Daybook' description={descriptions.daybook}/>
      <ServiceItem icon='fa-lock' title='Rates' description={descriptions.rates}/>
      <ServiceItem icon='fa-cog' title='Inventory' description={descriptions.inventory}/>
      <ServiceItem icon='fa-desktop' title='Channel Manager' description={descriptions.cm}/>
      <ServiceItem icon='fa-desktop' title='Booking Manager' description={descriptions.bm}/>
      <ServiceItem icon='fa-desktop' title='OTA specialist' description={descriptions.specialist}/>
    </div>
  </div>
</section>

);

export default Services;
