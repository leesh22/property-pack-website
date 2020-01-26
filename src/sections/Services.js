
import React from 'react';

import ServiceItem from '../components/service-item';


const descriptions = {
  service1:'Space, the final frontier. These are the voyages of the Starship Enterprise.'
}

const Services = () => (
  <section id="two" className="wrapper style3 fade-up">
  <div className="inner">
    <h2>What we do</h2>
    <p>
      Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
      turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
      lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
      imperdiet est velit quis lorem.
    </p>

    <div className="features">
      <ServiceItem icon='fa-code' title='service 1' description={descriptions.service1}/>
      <ServiceItem icon='fa-lock' title='service 2' description={descriptions.service1}/>
      <ServiceItem icon='fa-cog' title='service 3' description={descriptions.service1}/>
      <ServiceItem icon='fa-desktop' title='service 4' description={descriptions.service1}/>
    </div>
  </div>
</section>

);

export default Services;