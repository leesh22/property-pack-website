
import React from 'react';

import pic1 from '../images/homestay-blanket.jpg';
import pic2 from '../images/homestay-pool.jpg';

import InfoItem from '../components/info-item';

const descriptions = {
  item1: 'Just say anything, George, say what ever\'s natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine.',
  item2: 'You do? Yeah, it\'s 8:00. Hey, McFly, I thought I told you never to come in here. Well it\'s gonna cost you. How much money you got on you?'
}

const Panels = () => (
  <section id="one" className="wrapper style2 spotlights">
    <InfoItem img={pic1} title='info panel one' description={descriptions.item1}/>
    <InfoItem img={pic2} title='info panel two' description={descriptions.item1}/>
  </section>
);

export default Panels;
