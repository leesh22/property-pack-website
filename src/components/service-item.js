import React from 'react';
import { Link } from 'gatsby';

const ServiceItem = (props) => (

  <section>
    <span className={`icon major ${props.icon}`} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </section>

);

export default ServiceItem;
