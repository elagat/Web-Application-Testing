import React from 'react';

const Display = (props) => {

  return (
    <div className='display'>
      <div className='boxes'>
        Strikes
        <div className='count'>{props.strikeCount}</div>
      </div>
      <div className='boxes'>
        Balls
        <div className='count'>{props.ballCount}</div>
      </div>
    </div>
  )
}

export default Display;
