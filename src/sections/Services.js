
import React from 'react';

import ServiceItem from '../components/service-item';


const descriptions = {
  daybook:'A space to see an overview of all your upcoming booking information.',
  rates:'Update all your OTA rates in one convenient place.',
  inventory:' Store, edit and update all your room info from each OTA',
  cm:'Add or edit your OTA connections. Let us help you list on more OTAs',
  bm:'Add, edit and view upcoming Bookings',
  specialist:'Connect with one of our OTA specialists to help you optimize your listings!'
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
