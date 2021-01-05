import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function Card(props) {
  return (
    <div>
      <h1 className="heading">{props.titel}</h1>
      <Avatar img='https://sachin6962.nl/img/foto1.2.jpg' />

      <div className="card">
        <div className="top">
          <h2 className='name'>{props.naam}</h2>
          <Avatar img='https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg'/>
        </div>
        <div className="bottom">
          <Detail info={props.telefoon} />
          <Detail info={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;