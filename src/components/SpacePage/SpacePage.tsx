import React from "react";
import { useParams } from "react-router-dom";
import './SpacePage.css';
import data from '../../static/data/sfpopos-data.json';

const SpacePage = ({random=false}:any) => {
  let space:any;
  const params = useParams();
  if (!random) {
    const { slug } = params;
    space = data.filter( space => space.slug === slug)[0];
  } else {
    space = data[Math.floor(Math.random() * data.length)];
  }

  return (
    <div className="SpacePage">
      <img className='space-img' src={'/img/' + space.images[0]} alt={space.title}/>
      <div className="space-info">
        <h1>{space.title}</h1>
        <p className="space-desc">{space.desc}</p>
        <p className='space-address'>📌 {space.address}</p>
        {space.hours ? (<p className='space-hours'>🕐 {space.hours}</p>) : <p className='space-hours'>🕐 Hours Unknown</p>}
        <div className="features">
          {space.features.map((feature:string) => <p className="feature">{feature}</p>)}
        </div>
      </div>
    </div>
  );
}

export default SpacePage;
