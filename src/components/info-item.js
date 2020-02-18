import React from 'react';

const InfoItem = (props) => (

  <section>
    <div  className="image">
      <img src={props.img} alt="" data-position="center center" />
    </div>
    <div className="content">
      <div className="inner">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  </section>

);

export default InfoItem;

