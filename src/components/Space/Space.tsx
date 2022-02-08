import React from 'react';
import { Link } from 'react-router-dom';
import './Space.css';

const Space = ({space}:any) => {
  return (
    <div className='space'>
      <Link to={`/${space.slug}`}><img className='space-img' src={'/img/' + space.images[0]} alt={space.title}/></Link>
      <Link className='space-name' to={`/${space.slug}`}><h1>{space.title}</h1></Link>
      <p className='space-address'>📌 {space.address}</p>
      {space.hours ? (<p className='space-hours'>🕐 {space.hours}</p>) : <p className='space-hours'>🕐 Hours Unknown</p>}
    </div>
  );
}

export default Space