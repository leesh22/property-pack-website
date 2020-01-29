
import React from 'react';

import pic1 from '../images/homestay-blanket.jpg';
import pic2 from '../images/homestay-pool.jpg';

import InfoItem from '../components/info-item';

const descriptions = {
  item1: 'Display all your OTA bookings in one place.  Set rates and block dates via 1 simple log in. You\'ll never have to remember all your logins again!',
  item2: 'Stop paying high commission rates by accepting bookings through your own personalized webpage.'
}

const Panels = () => (
  <section id="one" className="wrapper style2 spotlights">
    <InfoItem img={pic1} title='Channel Manager' description={descriptions.item1}/>
    <InfoItem img={pic2} title='Payment Manager (Coming soon)' description={descriptions.item1}/>
  </section>
);

export default Panels;
