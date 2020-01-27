import React from 'react';

const InfoItem = (props) => (

  <section>
    <a href="/#" className="image" alt="image">
      <img src={props.img} alt="" data-position="center center" />
    </a>
    <div className="content">
      <div className="inner">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  </section>

);

export default InfoItem;

