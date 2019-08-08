import React, { useState } from 'react';
import Display from './Display';

const Dashboard = () => {

  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);

  const strike = () => {
    const updated = strikeCount + 1
    if (updated > 2) {
      reset();
    } else {
      setStrikeCount(updated);
    };
  }

  const ball = () => {
    const updated = ballCount + 1
    if (updated > 3) {
      reset();
    } else {
      setBallCount(updated);
    };
  }

  const foul = () => {
    if (strikeCount < 2) {
      const updated = strikeCount + 1
      setStrikeCount(updated);
    };
  }

  //useEffect( //update setBallCoutn regardless and do logic check in this useffect)
  const reset = () => {
    setStrikeCount(0); //strikeCount = 0;
    setBallCount(0);
  }

  return (
    <div className="dashboard">
      <div className='button' onClick={strike}>
        Strike
      </div>
      <div className='button' onClick={ball}>
        Ball
      </div>
      <div className='button' onClick={foul}>
        Foul
      </div>
      <div className='button' onClick={reset}>
        Hit
      </div>
      <Display strikeCount={strikeCount} ballCount={ballCount}/>
    </div>
  )
}

export default Dashboard;
