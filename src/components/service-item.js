import React from 'react';

const ServiceItem = (props) => (

  <section>
    <span className={`icon major ${props.icon}`} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </section>

);

export default ServiceItem;
