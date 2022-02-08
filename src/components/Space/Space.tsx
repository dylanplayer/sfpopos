import React from 'react';
import { Link } from 'react-router-dom';
import './Space.css';

interface space {
  slug: string,
  img:string,
  name:string,
  description:string,
  address:string,
  hours:string,
}

const Space = ({space}:{space:space}) => {
  return (
    <div className='space'>
      <Link to={`/${space.slug}`}><img className='space-img' src={space.img} alt={space.name}/></Link>
      <Link className='space-name' to={`/${space.slug}`}><h1>{space.name}</h1></Link>
      <p className='space-address'>📌 {space.address}</p>
      <p className='space-hours'>🕐 {space.hours}</p>
    </div>
  );
}

export default Space