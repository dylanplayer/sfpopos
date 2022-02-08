import React from 'react';
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
  let spaceMarkup = spaces.map((space, i) => {
    return (<Space space={space} key={i} />);
  });

  return (
    <div className='list'>
      <div className='spaces'>
        {spaceMarkup}
      </div>
    </div>
  )
}

export default List;
