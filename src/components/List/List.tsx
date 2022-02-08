import React, { useEffect, useState } from 'react';
import Space from '../Space';
import './List.css';

interface space {
  slug: string,
  img:string,
  name:string,
  description:string,
  address:string,
  hours:string,
}

const List = ({ spaces }:{ spaces:space[] } ) => {
  const [query, setQuery] = useState('');

  let spaceMarkup = spaces.map((space, i) => {
    return (<Space space={space} key={i} />);
  });

  spaceMarkup = spaces.filter((space:any) => {
    return space.title.includes(query) || space.address.includes(query) || space.desc.includes(query);
  }).map((space, i) => {
    return (<Space space={space} key={i} />);
  });

  return (
    <div className='list'>
      <input className='search-bar' placeholder='search...' onChange={event => setQuery(event.target.value)}/>
      <div className='spaces'>
        {spaceMarkup}
      </div>
    </div>
  )
}

export default List;
